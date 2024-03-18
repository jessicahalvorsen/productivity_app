/**
 * File Name: tableController.js
 * Updated On: 3/2/24 by Jessica Halvorsen 
 * Description: Open the database, add new tasks and users, delete users, close the database
 */

const db = require('../init'); 

//closes the database
function closeDB() {
    db.close((err) => {
        if (err) {
            console.error('Error closing database: ', err.message);
        } else {
            console.log('Database connection closed.');
        }
    });
}

//function to add new user
function addNewUser(firstName, lastName, email, password) {
    const sql = 'INSERT INTO Users (FirstName, LastName, Email, Password) VALUES (?, ?, ?, ?)';
    console.log(`A User has been inserted with UserID ${this.lastID}`);
    db.run(sql, [firstName, lastName, email, password], function(err) {
        if (err) {
            console.error('Error inserting User into the table:', err.message);
        } else {
            console.log(`A User has been inserted with UserID ${this.lastID}`);
        }
    });
}

//function to add new task
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

//function to delete a user 
function deleteUser(userID) {
    const sql = 'DELETE FROM Users WHERE UserID = ?';

    db.run(sql, [userID], function(err) {
        if (err) {
            console.error('Error deleting user from the table:', err.message);
        } else {
            console.log(`User with UserID ${userID} has been deleted.`);
        }
    });

    const sql2 = 'DELETE FROM Tasks WHERE UserID = ?';

    db.run(sql2, [userID], function(err) {
        if (err) {
            console.error('Error deleting user from the table:', err.message);
        } else {
            console.log(`Tasks for user with UserID ${userID} have been deleted.`);
        }
    });
}

//export functions 
module.exports = {
    addNewUser,
    addNewTask, 
    closeDB, 
    deleteUser
    
};

