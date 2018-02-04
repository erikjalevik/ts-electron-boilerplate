import { app, BrowserWindow } from "electron";
import * as path from "path";
import * as url from "url";

let win: BrowserWindow | null;

function createWindow() {
  win = new BrowserWindow({width: 800, height: 600});
  win.loadURL(url.format({
    pathname: path.join(__dirname, "index.html"),
    protocol: "file:",
    slashes: true,
  }));

  win.on("closed", () => {
    win = null;
  });
}

app.on("ready", createWindow);

// On Mac, leave the app running after closing the window
// and recreate the window when activating the app again

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (win === null) {
    createWindow();
  }
});
