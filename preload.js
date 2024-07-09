const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  sendData: async (data) => await ipcRenderer.send("save-reminder", data),
  fetchReminders: async () => await ipcRenderer.invoke("get-reminders"),
})

