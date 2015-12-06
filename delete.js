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
    filter(r.row('age').lt(20)).
    delete().
    run(connection, function(err, result) {
        if (err) throw err;
        console.log(JSON.stringify(result, null, 2));
        connection.close();
    });

});

