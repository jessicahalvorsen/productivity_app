/**
 * File Name: init.js
 * Updated On: 3/2/24 by Jessica Halvorsen 
 * Description: File to initially create the database and two tables. One with user information
 * and one to store task data. 
 */

const sqlite = require('sqlite3'); 


//create a new SQLite database connection called myapp.db
const db = new sqlite.Database('myApp.db', (err) => {        
    if (err) {
        console.error('Error opening database: ', err.message);
    } else {
        console.log('Connected to the database.');
    }
});

/*
//create the Users table
db.run(`CREATE TABLE Users (
    UserID INTEGER PRIMARY KEY AUTOINCREMENT,
    FirstName TEXT NOT NULL,
    LastName TEST NOT NULL, 
    Email TEXT UNIQUE NOT NULL,
    Password TEXT NOT NULL
)`, (err) => {
    if (err) {
        console.error('Error creating Users table: ', err.message);
    } else {
        console.log('Users table created successfully.');
    }
});

//create the Tasks Table
db.run(`CREATE TABLE Tasks (
    TaskID INTEGER PRIMARY KEY AUTOINCREMENT,
    UserID INTEGER NOT NULL,
    Description TEXT,
    Date DATE NOT NULL,
    IsCompleted BOOLEAN DEFAULT 0,
    FOREIGN KEY (UserID) REFERENCES Users(UserID)
);`, (err) => {
    if (err) {
        console.error('Error creating Tasks table: ', err.message);
    } else {
        console.log('Tasks table created successfully.');
    }
});

*/

//export the db for use in other files 
module.exports = db;