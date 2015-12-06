var r = require('rethinkdb');
var databaseName = 'test';

//Creates the table contents for 'danny'
var connection = null;
r.connect({
	host: 'localhost', 
	port: 28015,
	db: databaseName
}, function(err, conn) {
    if (err) throw err;
    connection = conn;

    r.table('danny').insert([
    	{firstname: "Nick", lastname: "James", age: 19, userid: 1, occupation: 'Health Inspector'},
    	{firstname: "Sean", lastname: "Marquez", age: 18, userid: 2, occupation: 'Math Professor'},
    	{firstname: "Sarah", lastname: "Woods", age: 24, userid: 3, occupation: 'Assistant Manager'},
    	{firstname: "Mike", lastname: "Feige", age: 21, userid: 4, occupation: 'Store Owner'},
    	{firstname: "Kevin", lastname: "Nims", age: 25, userid: 5, occupation: 'Basketball Coach'}
    	]).run(connection, function(err, result) {
   			if (err) throw err;
   			console.log("Table entries created sucessful!");
    		connection.close();
		})
});

