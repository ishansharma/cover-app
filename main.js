const {app, shell, BrowserWindow} = require('electron');

function createWindow() {
    // Create the browser window.
    win = new BrowserWindow({width: 800, height: 600});

    // make sure we don't resize the window
    win.setResizable(false);

    // and load the index.html of the app.
    win.loadFile('index.html');

    // open links in external browser
    // useful advice from https://github.com/electron/electron/issues/1344#issuecomment-392844066
    win.webContents.on('new-window', function (event, url) {
        console.log('Clicked!');
        if (url.startsWith('http:') || url.startsWith('https:')) {
            event.preventDefault();
            shell.openExternal(url);
        }
    });
}

app.on('ready', createWindow);