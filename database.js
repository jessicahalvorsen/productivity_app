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

// Function to insert a name into the table 
function insertRow(name) {
    const sql = 'INSERT INTO test (name) VALUES (?)';

    db.run(sql, [name], function(err) {
        if (err) {
            console.error('Error inserting data into the table:', err.message);
        } else {
            console.log(`A row has been inserted with rowid ${this.lastID}`);
        }
    });
}


// Export the function to make it accessible from other files
module.exports = {
    getAllRowsFromTable,
    insertRow
};