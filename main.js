const { app, BrowserWindow } = require('electron')
const { addNewUser, addNewTask, closeDB, deleteUser } = require('./src/database/control.js'); 
const {User}  = require('./src/database/User'); 
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

//create instance of database
const user4 = new User(4); 

user1.getEmail((err, email) => {
  if (err) {
      console.error('Error:', err.message);
  } else {
      console.log('User 1 email:', email);
  }
});

/*
user4.updateFirstName('Winston', (err) => {
    if (err) {
        console.error('Error updating first name:', err.message);
    } else {
        console.log('First name updated successfully.');
    }
});
*/

//deleteUser(2); 

//var id;
addNewUser('Mom', 'Halvorsen', 'khalvorsen@gmail', 'pa$$word'); 

//addNewTask(1, 'work on our app:)', '2024-03-02'); 

closeDB(); 
