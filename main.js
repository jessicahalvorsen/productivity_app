const { app, BrowserWindow } = require('electron')
const { addNewUser, addNewTask, closeDB, deleteUser } = require('./src/database/controllers/tableController.js'); 
const {User}  = require('./src/database/User'); 
const { getFirstName, updateFirstName, getLastName, 
  updateLastName,getEmail, updateEmail, getPassword, 
  updatePassword} = require('./src/database/controllers/userController.js'); 
const { updateCompletion } = require('./src/database/controllers/taskController.js'); 
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

//addNewUser('Jess', 'Day', 'newgirl@gmail.com', 'NYapt'); 
//addNewTask(2, 'annoy schmidt', '2015-01-13'); 

//create a new instance of a user to retreive info
//const user1 = new User(1); 
//const user4 = new User(4); 
/*
getEmail((err, email) => {
  if (err) {
      console.error('Error:', err.message);
  } else {
      console.log('User 1 email:', email);
  }
});


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
//addNewUser('Mom', 'Halvorsen', 'khalvorsen@gmail', 'pa$$word'); 

//addNewTask(1, 'open the bar', '2024-03-02'); 
//addNewUser('Schmidt', 'idk', 'schmidt@gmail.com', 'cece'); 


var id = 4; 
getPassword(id, (err, email) => {
  if (err) {
    console.error('Error:', err.message);
  } else {      
    console.log('UserID ' + id + ' password:', email);
  }
});

var complete = 1; 
updateCompletion(1, complete, (err) => {
  if (err) {
      console.error('Error updating completion:', err.message);
  } else {
      console.log('Completion updated successfully.');
  }
});


closeDB(); 
