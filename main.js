/**
 * Created by Brian on 17/10/2016.
 */
var express = require("express");
var app = express();
var bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({extended:true}));


app.post('/som',function (request,response) {
    console.dir(request.body);
    var som = request.body.bodysom;

    var uitkomst = eval(request.body.bodysom);
    console.dir(uitkomst);
    response.send(String(uitkomst));

})

console.log('done')

app.listen(4567);
