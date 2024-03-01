const { app, BrowserWindow } = require('electron')
const { getAllRowsFromTable } = require('./database.js');

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    }
  })

  win.loadFile('index.html')
}

app.whenReady().then(createWindow)

// Call the function to get all rows from the table when needed
getAllRowsFromTable('test', (rows) => {
  console.log('Rows retrieved from database:', rows);
  // Do something with the retrieved rows
});