const { app, BrowserWindow, Menu, shell, ipcMain } = require("electron");
const path = require("path");

const menuItems = [
  
  {
    label: "Demo",
    submenu: [
      {
        label: "Open Camera",
        click: async () => {
          const rend_2 = new BrowserWindow({
            height: 500,
            width: 800,
            webPreferences: {
              preload: path.join(__dirname, "camera/camera_preload.js"),
            },
          });

          //close capture window
          ipcMain.on("close-rend_2", () => rend_2.close());

          // win2.webContents.openDevTools();
          rend_2.loadFile("camera/camera.html");
          rend_2.once("ready-to-show", () => rend_2.show());
        }
        },
        {
        label: "Create Websocket",
        click: async () => {
          const socket_window = new BrowserWindow({
            height: 500,
            width: 800,
            webPreferences: {
              preload: path.join(__dirname, "websocket/socket_preload.js"),
            },
          });

        //close socket window
        ipcMain.on("close-socket-window", () => socket_window.close());
          //socket_window.webContents.openDevTools();

          socket_window.loadFile("websocket/socket.html");
          //display window gracefully
          socket_window.once("ready-to-show", () => socket_window.show());
        }
      },
      {
        label: "Open google",
        click: async () => {
          await shell.openExternal("http://google.co.in");
        },
      },
      {
        type: "separator",
      },
      {
        label: "Exit",
        click: () => app.quit(),
      },
    ],
  },
];

const menu = Menu.buildFromTemplate(menuItems);
Menu.setApplicationMenu(menu);

const createWindow = () => {
  const rend_1 = new BrowserWindow({
    height: 500,
    width: 800,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

//receive from renderer 2
  ipcMain.on("send-image", (event, data) => {
    //send to renderer 1
    rend_1.webContents.send("receive-image", data);
  });

  // win.webContents.openDevTools();
  rend_1.loadFile("index.html");
};

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
