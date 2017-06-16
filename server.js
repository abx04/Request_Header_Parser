var express=require('express');
var app=express();

var response={};



app.use(function (req,res) {
    console.log(req.headers);
    response.ip=req.ip;
    response.language=req.headers["accept-language"].split(',')[0];
    response.software=req.headers["user-agent"].split('(')[1].split(')')[0];
    res.send(JSON.stringify(response));

});



app.listen(8080);