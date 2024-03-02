/**
 * File Name: control.js
 * Updated On: 3/2/24 by Jessica Halvorsen 
 * Function: Opens the database and has functions to addNewUsers, 
 */

const sqlite = require('sqlite3'); 

//open the database 
const db = new sqlite.Database('./myApp.db', (err) => {
    if (err) {
        console.error('Error opening database: ', err.message);
    } else {
        console.log('Connected to the database.');
    }
  });

//function to add new user
function addNewUser(firstName, lastName, email, password) {
    const sql = 'INSERT INTO Users (FirstName, LastName, Email, Password) VALUES (?, ?, ?, ?)';

    db.run(sql, [firstName, lastName, email, password], function(err) {
        if (err) {
            console.error('Error inserting User into the table:', err.message);
        } else {
            console.log(`A User has been inserted with UserID ${this.lastID}`);
        }
    });
}

//function to add new user
function addNewTask(userID, description, date) {
    const sql = 'INSERT INTO Tasks (UserID, Description, Date) VALUES (?, ?, ?)';

    db.run(sql, [userID, description, date], function(err) {
        if (err) {
            console.error('Error inserting Task into the table:', err.message);
        } else {
            console.log(`A Task has been inserted with TaskID ${this.lastID}`);
        }
    });
}

//function to return a users email using UserID
function getUserEmail(userID, callback) {
    const query = 'SELECT Email FROM Users WHERE UserID = ?';

    db.get(query, [userID], (err, row) => {
        if (err) {
            console.error('Error fetching email from the database: ', err.message);
            callback(err, null);
        } else {
            // Pass the email to the callback function
            callback(null, row ? row.Email : null);
        }
    });
}

//export functions 
module.exports = {
    addNewUser,
    addNewTask, 
    getUserEmail
};