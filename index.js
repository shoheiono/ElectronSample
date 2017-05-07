const { app, BrowserWindow } = require('electron');

// window objectがGCされないようにするために、globalに定義する
let win;

function createWindow() {
	win = new BrowserWindow({ width: 800, height: 600 });

	win.loadURL(`file://${__dirname}/index.html`);

	win.on('closed', () => {
		// windowがクローズされたら null にして削除
		win = null;
	});
}

function setEvent() {
	app.on('ready', createWindow);

	app.on('will-finish-launching', (e) => { console.log(e); });
	app.on('ready', (e) => { console.log(e); });
	app.on('before-quit', (e) => { console.log(e); });
	app.on('will-quit', (e) => { console.log(e); });
	app.on('quit', (e) => { console.log(e); });
	app.on('browser-window-blur', (e) => { console.log(e); });
	app.on('browser-window-focus', (e) => { console.log(e); });
	app.on('browser-window-created', (e) => { console.log(e); });
	app.on('browser-window-created', (e) => { console.log(e); });
	app.on('certificate-error', (e) => { console.log(e); });
	app.on('select-client-certificate', (e) => { console.log(e); });
	app.on('login', (e) => { console.log(e); });
	app.on('gpu-process-crashed', (e) => { console.log(e); });
	app.on('accessibility-support-changed', (e) => { console.log(e); });
	app.on('window-all-closed', () => {
		app.quit();
	});

	
}

setEvent();
