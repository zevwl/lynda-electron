const electron = require('electron');
const BrowserWindow = electron.BrowserWindow;
const app = electron.app;

app.on('ready', () => {

    let appWindow = new BrowserWindow();
    appWindow.loadURL('https://zevwl.github.io');

    let infoWindow = new BrowserWindow({
        width: 400,
        height: 300,
        transparent: true,
        frame: false
    });

    infoWindow.setMenu(null);
    infoWindow.loadURL(`file://${__dirname}/info.html`);
});