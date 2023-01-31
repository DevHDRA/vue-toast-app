const {app, ipcMain, BrowserWindow} = require('electron')
const path = require('path')

function createWindow () {
  const mainWindow = new BrowserWindow({
    width: 850,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, '../renderer/mainPreload.js')
    }
  })

  // this line works with builds
  // mainWindow.loadFile('dist/index.html')
  mainWindow.loadURL('http://localhost:5173/')

  ipcMain.handle('new:window', newWindow)

}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

const newWindow = () => {
  const newBrowserWindow = new BrowserWindow({
    width: 400,
    height: 400,
  })
  newBrowserWindow.loadURL('https://dealingwithdevelop.link')
}