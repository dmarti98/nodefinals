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

    r.db(databaseName).tableCreate('danny').run(connection, 
        function(err, result){
            if(err) throw err;
            connection.close();
        })

});

