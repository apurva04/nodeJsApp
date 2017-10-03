var express = require('express');
var app = express();
app.use(express.static(__dirname+"/public"));
app.get('/fetchdata', function (req, res) {
    var sql = require('mssql');

    var config = {
        user: 'da',
        password: 'test',
        server: 'localhost\\SQLEXPRESS',
        database: 'master',
        port: '1433'


    };

    console.log("i am in server");

    
    var conn = new sql.ConnectionPool(config);
    conn.connect().then(function () {
        var request = new sql.Request(conn);
        request.query("select * from abc").then(function (recordSet) {
            console.log(recordSet);
            conn.close();
            res.send(recordSet);
        }).catch(function (err) {
            console.log(err);
            conn.close();
            res.send(err);
        });
    }).catch(function (err) {
        console.log(err);
    });
   
});
var server = app.listen(3000, function () {
    console.log('Server is running..');
});