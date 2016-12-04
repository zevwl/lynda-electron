const electron = require('electron');
const BrowserWindow = electron.BrowserWindow;
const app = electron.app;

app.on('ready', () => {
    let appWindow;
    appWindow = new BrowserWindow();
    appWindow.loadURL('https://zevwl.github.io');
});