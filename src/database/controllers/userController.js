/**
 * File Name: userController.js
 * Updated On: 3/2/24 by Jessica Halvorsen 
 * Description: Provies 'getters' and 'setters' for a User information specified by UserID 
 */
const db = require('../init'); 


//return the first name
function getFirstName(userID, callback) {
    const query = 'SELECT FirstName FROM Users WHERE UserID = ?';

    db.get(query, [userID], (err, row) => {
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
function updateFirstName(userID, firstName, callback) {
    const query = 'UPDATE Users SET FirstName = ? WHERE UserID = ?';

    db.run(query, [firstName, userID], function(err) {
        if (err) {
            console.error('Error updating first name in the database: ', err.message);
            callback(err);
        } else {
            console.log(`Updated first name for user with ID ${userID}`);
            callback(null);
        }
    });
}

//return the last name
function getLastName(userID, callback) {
    const query = 'SELECT LastName FROM Users WHERE UserID = ?';

    db.get(query, [userID], (err, row) => {
        if (err) {
            console.error('Error fetching last name from the database: ', err.message);
            callback(err, null);
        } else {
            // Pass the last name to the callback function
            callback(null, row ? row.LastName : null);
        }
    });
}

//update user last name 
function updateLastName(userID, lastName, callback) {
    const query = 'UPDATE Users SET LastName = ? WHERE UserID = ?';

    db.run(query, [lastName, userID], function(err) {
        if (err) {
            console.error('Error updating last name in the database: ', err.message);
            callback(err);
        } else {
            console.log(`Updated last name for user with ID ${userID}`);
            callback(null);
        }
    });
}

//return the email
function getEmail(userID, callback) {
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

//update user email 
function updateEmail(userID, email, callback) {
    const query = 'UPDATE Users SET Email = ? WHERE UserID = ?';

    db.run(query, [email, userID], function(err) {
        if (err) {
            console.error('Error updating email in the database: ', err.message);
            callback(err);
        } else {
            console.log(`Updated email for user with ID ${userID}`);
            callback(null);
        }
    });
}

//return the password
function getPassword(userID, callback) {
    const query = 'SELECT Password FROM Users WHERE UserID = ?';

    db.get(query, [userID], (err, row) => {
        if (err) {
            console.error('Error fetching password from the database: ', err.message);
            callback(err, null);
        } else {
            // Pass the password to the callback function
            callback(null, row ? row.Password : null);
        }
    });
}

//update user password 
function updatePassword(userID, password, callback) {
    const query = 'UPDATE Users SET Password = ? WHERE UserID = ?';

    db.run(query, [password, userID], function(err) {
        if (err) {
            console.error('Error updating password in the database: ', err.message);
            callback(err);
        } else {
            console.log(`Updated password for user with ID ${userID}`);
            callback(null);
        }
    });
}

module.exports = {
    getFirstName, 
    updateFirstName,
    getLastName, 
    updateLastName, 
    getEmail, 
    updateEmail, 
    getPassword, 
    updatePassword
}
