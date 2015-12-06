var r = require('rethinkdb');
var databaseName = 'test';


var connection = null;
r.connect({
	host: 'localhost', 
	port: 28015,
	db: databaseName
}, function(err, conn) {
    if (err) throw err;
    connection = conn;

    // r.db(databaseName).tableCreate('danny').run(connection);

    r.table('danny').insert([
    	{firstname: "Nick", lastname: "James", age: 19, occupation: 'Health Inspector'},
    	{firstname: "Sean", lastname: "Marquez", age: 18, occupation: 'Math Professor'},
    	{firstname: "Sarah", lastname: "Woods", age: 24, occupation: 'Business Manager'},
    	{firstname: "Mike", lastname: "Feige", age: 21, occupation: 'Business Owner'},
    	{firstname: "Kevin", lastname: "Nims", age: 25, occupation: 'Basketball Coach'}
    	]).run(connection, function(err, result) {
   			if (err) throw err;
   			console.log("Table entries created sucessful!");
    		console.log(JSON.stringify(result, null, 2));
    		connection.close();
		})
});

