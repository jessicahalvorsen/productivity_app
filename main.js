const { app, BrowserWindow } = require('electron')
const { addNewUser, addNewTask, getUserEmail } = require('./src/database/control.js'); 
//require('./src/database/init.js');

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

//addNewUser('Jessica', 'Halvorsen', 'j.halvorsen@ufl.edu', 'pa$$word'); 
//addNewTask(1, 'work on our app:)', '2024-03-02'); 

getUserEmail(1, (err, email) => {
  if (err) {
      console.error('Error:', err.message);
  } else {
      console.log('User 1 email:', email);
  }
});