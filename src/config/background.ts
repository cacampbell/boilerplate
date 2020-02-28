import { app, BrowserWindow } from "electron";

const isDevelopment = process.env.NODE_ENV !== "production";

let win: BrowserWindow | null;

function createWindow(): void {
    win = new BrowserWindow({
        title: "Boilerplate",
        width: 1025,
        height: 768,
        webPreferences: {
            nodeIntegration: process.env.ELECTRON_NODE_INTEGRATION as unknown as boolean 
        },
        show: false
    });

    win.once("ready-to-show", () => {
        if (win != null) {
            win.show();
        }
    });

    win.loadFile("ui/index.html");
    if (isDevelopment) win.webContents.openDevTools();

    // Remove the default menu
    win.setMenuBarVisibility(false);

    win.on("closed", () => {
        win = null;
    });
}

app.on("window-all-closed", () => {
    app.quit();
});

app.on("activate", () => {
    if (win == null) {
        createWindow();
    }
});

app.on("ready", async() => {
    createWindow();
});

// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
    if (process.platform === "win32") {
        process.on("message", (data) => {
            if (data === "graceful-exit") {
                app.quit();
            }
        });
    } else {
        process.on("SIGTERM", () => {
            app.quit();
        });
    }
}
