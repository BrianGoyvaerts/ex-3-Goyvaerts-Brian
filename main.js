/**
 * Created by Brian on 17/10/2016.*/
var express = require("express");
var app     = express();
var path    = require("path");

 /* var express = require("express");
var app = express();
var bustenparser = require('body-parser');

app.use(bustenparser.urlencoded({extended:true}));


app.get('/',function (response) {
    res.send('opgave');
});

app.get('/calc',function(request,response){
    console.dir(request.body);
    var opgave = request.body.bodyopgave;

    var uitkomst = eval(request.body.bodyopgave);
    console.dir(uitkomst);
    response.send(String(uitkomst));
});

app.get('/calc/:opdracht',function(request,response){
    var opdracht = request.params.opdracht;
    var uitkomst = eval(request.params.opdracht);
    response.send(String(uitkomst));
})*/
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
    //__dirname : It will resolve to your project folder.
});

app.listen(3000);

console.log("Running at Port 3000");


