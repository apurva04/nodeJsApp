var express=require('express');
var app=express();
//app.use(express.static(__dirname+"/public"));
app.get('/fetchdata',function(req,res){
    var  sql= require('mssql');
    
    var config={
        user:'pmanshani',
        password:'Password@123',
        server:'localhost',
        database:'test',
        porrt:5000,
        
    };
   
    console.log("i am in server");


    sql.connect(config,function(err){
        if(err) console.log(err);

        var request=new sql.request();
        request.query('select * from abc',function(err,record){
            if(err) console.log(err);

            res.send(record);

        });

    });

    sql.close();
});
var server = app.listen(5000, function () {
    console.log('Server is running..');
});