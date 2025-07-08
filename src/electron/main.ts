import { app, BrowserWindow } from 'electron';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const isDev = !app.isPackaged && process.env.NODE_ENV !== 'production';

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1280,
    height: 800,
    minWidth: 800,
    minHeight: 600,
    autoHideMenuBar: true,
    webPreferences: {
      preload: join(__dirname, './preload.js'),
    },
  });

  win.maximize();

  if (isDev) {
    win.loadURL('http://localhost:5173');
  } else {
    const indexPath = join(__dirname, '../react/index.html');
    win.loadFile(indexPath);
  }
};

app.whenReady().then(createWindow);
