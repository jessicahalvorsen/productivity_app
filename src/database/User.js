/**
 * File Name: User.js
 * Updated On: 3/2/24 by Jessica Halvorsen 
 * Description: creates user objects that have 'getters' and 'setters' for a User 
 * specified by UserID 
 */
const db = require('./init'); 


class User {
    constructor(userID) {
        this.userID = userID; 
    }

    //return the first name
    getFirstName(callback) {
        const query = 'SELECT FirstName FROM Users WHERE UserID = ?';
    
        db.get(query, [this.userID], (err, row) => {
            if (err) {
                console.error('Error fetching first name from the database: ', err.message);
                callback(err, null);
            } else {
                // Pass the first name to the callback function
                callback(null, row ? row.FirstName : null);
            }
        });
    }

    //update user first name 
    updateFirstName(firstName, callback) {
        const query = 'UPDATE Users SET FirstName = ? WHERE UserID = ?';
    
        db.run(query, [firstName, this.userID], function(err) {
            if (err) {
                console.error('Error updating first name in the database: ', err.message);
                callback(err);
            } else {
                console.log(`Updated first name for user with ID ${this.userID}`);
                callback(null);
            }
        });
    }

    //return the last name
    getLastName(callback) {
        const query = 'SELECT LastName FROM Users WHERE UserID = ?';
    
        db.get(query, [this.userID], (err, row) => {
            if (err) {
                console.error('Error fetching last name from the database: ', err.message);
                callback(err, null);
            } else {
                // Pass the email to the callback function
                callback(null, row ? row.LastName : null);
            }
        });
    }

    //update user last name 
    updateLastName(lastName, callback) {
        const query = 'UPDATE Users SET LastName = ? WHERE UserID = ?';
    
        db.run(query, [lastName, this.userID], function(err) {
            if (err) {
                console.error('Error updating last name in the database: ', err.message);
                callback(err);
            } else {
                console.log(`Updated last name for user with ID ${this.userID}`);
                callback(null);
            }
        });
    }

    //return the email
    getEmail(callback) {
        const query = 'SELECT Email FROM Users WHERE UserID = ?';
    
        db.get(query, [this.userID], (err, row) => {
            if (err) {
                console.error('Error fetching email from the database: ', err.message);
                callback(err, null);
            } else {
                // Pass the email to the callback function
                callback(null, row ? row.Email : null);
            }
        });
    }

    //update user email 
    updateEmail(email, callback) {
        const query = 'UPDATE Users SET Email = ? WHERE UserID = ?';
    
        db.run(query, [email, this.userID], function(err) {
            if (err) {
                console.error('Error updating email in the database: ', err.message);
                callback(err);
            } else {
                console.log(`Updated email for user with ID ${this.userID}`);
                callback(null);
            }
        });
    }

    //return the password
    getPassword(callback) {
        const query = 'SELECT Password FROM Users WHERE UserID = ?';
    
        db.get(query, [this.userID], (err, row) => {
            if (err) {
                console.error('Error fetching password from the database: ', err.message);
                callback(err, null);
            } else {
                // Pass the email to the callback function
                callback(null, row ? row.Password : null);
            }
        });
    }

    //update user password 
    updatePassword(password, callback) {
        const query = 'UPDATE Users SET Password = ? WHERE UserID = ?';
    
        db.run(query, [password, this.userID], function(err) {
            if (err) {
                console.error('Error updating password in the database: ', err.message);
                callback(err);
            } else {
                console.log(`Updated password for user with ID ${this.userID}`);
                callback(null);
            }
        });
    }
}

module.exports = {User}; 