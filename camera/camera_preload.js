//electron module provides ipcRenderer APIs
//send image to main process
const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  sendImageToMain: (data) => ipcRenderer.send("send-image", data),
});
