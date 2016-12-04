const electron = require('electron');
const BrowserWindow = electron.BrowserWindow;
const app = electron.app;

app.on('ready', () => {

    let appWindow = new BrowserWindow({
        show: false
    });
    appWindow.loadURL('https://zevwl.github.io');

    let infoWindow = new BrowserWindow({
        width: 400,
        height: 300,
        show: false,
        transparent: true,
        frame: false
    });

    infoWindow.setMenu(null);
    infoWindow.loadURL(`file://${__dirname}/info.html`);

    appWindow.once('ready-to-show', () => {
        appWindow.show();
        setTimeout(() => {
            infoWindow.show();
            setTimeout(() => infoWindow.hide(), 3000);
        }, 1000);
    });
});