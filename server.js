var express=require(express);
var app=express();
// var sql = require("mssql");
app.get('/',function(req,res){

    var config={
        user:"",
        password:"",
        server:"",
        database:"",
    };

    // sql.Connect(config,function(err){
    //     if(err) console.log(err);

    //     var request=new sql.request();
    //     request.query('select * from Student',function(err,record){
    //         if(err) console.log(err);

    //         res.send(record);

    //     });

    // });


});
var server = app.listen(5000, function () {
    console.log('Server is running..');
});