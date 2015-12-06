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


    r.table('danny').
    filter(r.row("userid").eq(3)).
    update({occupation: "General Manager"}).
    run(connection, function(err, result) {
        if (err) throw err;
        console.log("Update complete!");
        connection.close();
    });

});


