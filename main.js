const { app, BrowserWindow, ipcMain } = require('electron')
const {updateFirstName, getFirstName} = require('./src/database/controllers/userController'); 
const path = require('path'); 


function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      //devTools: true,
      preload : path.join(__dirname, 'preload.js'),
    }
  })
  win.webContents.openDevTools(); 
  win.loadFile('index.html')
}

ipcMain.on('update-first-name', (event, userID, firstName) => {
  console.log("Main Process > update-first-name")
  updateFirstName(userID, firstName, (err) => {
      if (err) {
          console.log("error updating in icpMain"); 
      } else {
          console.log("successfully updated in icpMain!"); 
      }
  });
});

ipcMain.on('get-first-name', (event, userID) => {
  console.log("Main Process > get-first-name")
  getFirstName(userID, (err, firstName) => {
    if (err) {
      console.log("error getting name in icpMain"); 
      event.reply('get-first-name-reply', { error: err.message });
    } else {
      console.log(`successfully got name: ${firstName} in icpMain!`);
      let nameStr = JSON.stringify(firstName); 
      event.reply('get-first-name-reply', { nameStr });
    }
  }); 
}); 

app.whenReady().then(createWindow)

