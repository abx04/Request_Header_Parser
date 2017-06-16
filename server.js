var express=require('express');
var app=express();

app.use(function (req,res) {
    var response={};

    if(req.headers['x-forwarded-for']!=undefined)
        response.ipaddress=req.headers['x-forwarded-for'].split(',')[0];

    else response.ipaddress=req.connection.remoteAddress ||
        req.socket.remoteAddress ||
        req.connection.socket.remoteAddress;

    response.language=req.get("accept-language").split(',')[0];
    response.software=req.get("user-agent").split('(')[1].split(')')[0];
    res.send(JSON.stringify(response));
});

app.listen(8080);