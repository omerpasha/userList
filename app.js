
var express = require('express');
var app = express();
var fs=require('fs');
var cors = require('cors');
var path = require('path');

app.use(cors());

app.get('/listele', function (req, res) {
    fs.readFile('users.json','utf-8',function(err,data){
        res.send(data)
        console.log(data);

    });
});

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '\\index.html'));
});
app.listen(8090,function(){    
    console.log('sunucu calisiyor');
});
