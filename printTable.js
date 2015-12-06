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
    // console.log("Inside: \n" + connection);

    r.table('danny').run(connection, function(err, cursorObject) {
    if (err) throw err;
    cursorObject.toArray(function(err, result) {
        if (err) throw err;
        console.log('\n-----------------------------------------');
        console.log('First\tLast\tAge\tOccupation');
        console.log('-----------------------------------------');
        for(i = 0; i < result.length; i++){
            console.log(result[i]['firstname'] + '\t' +
                result[i]['lastname'] + '\t' +
                result[i]['age'] + '\t' +
                result[i]['occupation'] );

        }
        console.log('-----------------------------------------\n');
    });

    connection.close();
});

});

