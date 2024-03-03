/**
 * File Name: taskController.js
 * Updated On: 3/2/24 by Jessica Halvorsen 
 * Description: Provies 'getters' and 'setters' for a task information specified by taskID 
 */
const db = require('../init'); 

//return the description 
function getDescription(taskID, callback) {
    const query = 'SELECT Description FROM Tasks WHERE TaskID = ?';

    db.get(query, [taskID], (err, row) => {
        if (err) {
            console.error('Error fetching description from the database: ', err.message);
            callback(err, null);
        } else {
            // Pass the description to the callback function
            callback(null, row ? row.Description : null);
        }
    });
}

//update task description 
function updateDescription(taskID, description, callback) {
    const query = 'UPDATE Tasks SET Description = ? WHERE TaskID = ?';

    db.run(query, [description, taskID], function(err) {
        if (err) {
            console.error('Error updating description in the database: ', err.message);
            callback(err);
        } else {
            console.log(`Updated description for task with ID ${taskID}`);
            callback(null);
        }
    });
}

//return the date
function getDate(taskID, callback) {
    const query = 'SELECT Date FROM Tasks WHERE TaskID = ?';

    db.get(query, [taskID], (err, row) => {
        if (err) {
            console.error('Error fetching date from the database: ', err.message);
            callback(err, null);
        } else {
            // Pass the date to the callback function
            callback(null, row ? row.Date : null);
        }
    });
}

//update user date
function updateDate(taskID, date, callback) {
    const query = 'UPDATE Tasks SET Date = ? WHERE TaskID = ?';

    db.run(query, [date, taskID], function(err) {
        if (err) {
            console.error('Error updating date in the database: ', err.message);
            callback(err);
        } else {
            console.log(`Updated date for task with ID ${taskID}`);
            callback(null);
        }
    });
}

//return completed status 
function getCompletion(taskID, callback) {
    const query = 'SELECT IsCompleted FROM Tasks WHERE TaskID = ?';

    db.get(query, [taskID], (err, row) => {
        if (err) {
            console.error('Error fetching IsCompleted from the database: ', err.message);
            callback(err, null);
        } else {
            // Pass the completion to the callback function
            callback(null, row ? row.IsCompleted : null);
        }
    });
}

//update user description 
function updateCompletion(taskID, completion, callback) {
    const query = 'UPDATE Tasks SET IsCompleted = ? WHERE TaskID = ?';

    db.run(query, [completion, taskID], function(err) {
        if (err) {
            console.error('Error updating IsComplete in the database: ', err.message);
            callback(err);
        } else {
            console.log(`Updated completion for task with ID ${taskID}`);
            callback(null);
        }
    });
}

module.exports = {
    getDescription, 
    updateDescription, 
    getDate, 
    updateDate, 
    getCompletion, 
    updateCompletion
}

