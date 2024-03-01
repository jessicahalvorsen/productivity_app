const path = require('path'); 
const sqlite = require('sqlite3'); 

const db = new sqlite.Database('./mytest.db', (err) => {
  if (err) {
      console.error('Error opening database: ', err.message);
  } else {
      console.log('Connected to the database.');
  }
});

// Function to execute a SQL query to select all rows from a table
function getAllRowsFromTable(tableName, callback) {
    db.all(`SELECT * FROM ${tableName}`, (err, rows) => {
        if (err) {
            console.error('Error executing query: ', err.message);
        } else {
            // Pass the rows returned by the query to the callback function
            callback(rows);
        }
    });
}
/*
db.close((err) => {
  if (err) {
      console.error('Error closing database: ', err.message);
  } else {
      console.log('Database connection closed.');
  }
});
*/
// Export the function to make it accessible from other files
module.exports = {
    getAllRowsFromTable
};