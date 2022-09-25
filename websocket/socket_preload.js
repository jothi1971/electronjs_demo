//electron module provides ipcRenderer APIs
const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  closeSocketWindow: () => ipcRenderer.send("close-socket-window"),

});
