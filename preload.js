

const { contextBridge, ipcRenderer } = require("electron");

//call get image in renderer 1 to set image
//close camera window from main process
contextBridge.exposeInMainWorld("electronAPI", {
  getImageFromMain: (callback) => ipcRenderer.on("receive-image", callback),
  closeRend2: () => ipcRenderer.send("close-rend_2"),
});
