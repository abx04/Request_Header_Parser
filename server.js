var express=require('express');
var app=express();

var response={};

app.use(function (req,res) {
    console.log(req.headers);
    response.ipaddress=req.ip.split(':')[req.ip.split(':').length-1];
    response.language=req.get("accept-language").split(',')[0];
    response.software=req.get("user-agent").split('(')[1].split(')')[0];
    res.send(JSON.stringify(response));

});



app.listen(8080);