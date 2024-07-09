const { app, BrowserWindow,  } = require("electron");
const url = require('url');
const path = require('path');
const { ipcMain } = require("electron/main");
const { main } = require("./db");
const { Reminder } = require("./db/schemas/remider.schema");
const { title } = require("process");

const createWindow = () => {
    main();
    let appWin = new BrowserWindow({
        width: 340,
        //width: 340,
        height: 610,
        minWidth: 340,
        minHeight: 500,
        movable: true,
        backgroundColor: "#25282A",
        frame: false,
        resizable: true,
        webPreferences: {
            preload: path.join(__dirname, "preload.js"),
            contextIsolation: true,
            nodeIntegration: true
        }
    });

    appWin.loadURL(url.format({
		pathname: path.join(
			__dirname,
			'dist/browser/index.html'),
		protocol: 'file:',
		slashes: true
	}))

    appWin.setMenu(null);

    appWin.webContents.openDevTools();

    appWin.on("closed", () => {
        appWin = null;
    });
}

ipcMain.on("save-reminder", async (data) => {
  console.log(data);
});

ipcMain.handle("get-reminders", async () => {
  try {
    const res = (await Reminder.find({}).populate("children")).map((r) => ({
      title: r.title,
      date: r.date,
    }))

    console.log(res)

    return res
  } catch (error) {
    console.error("Error inserting reminder", error);
    throw error;
  }
})

app.on("ready", createWindow);

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
      app.quit();
    }
});
