const { app, BrowserWindow } = require("electron");
const url  = require('url');
const path = require('path');

createWindow = () => {
    appWin = new BrowserWindow({
        width: 340,
        //width: 340,
        height: 610,
        minWidth: 340,
        minHeight: 500,
        movable: true,
        backgroundColor: "#FFA500",
        frame: false,
        resizable: true,
        webPreferences: {
            contextIsolation: false,
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

app.on("ready", createWindow);

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
      app.quit();
    }
});