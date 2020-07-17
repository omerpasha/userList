/*gereklilikler eklendi*/ 
var express = require('express');
var app = express();
var fs=require('fs');
url=require('url');
var cors = require('cors');
var path = require('path');
app.use(cors());//cors hatasını gidermek için
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
/*kullanıcıları listelemek için*/
app.get('/listele', function (req, res) {
     fs.readFile('users.json','utf-8',function(err,data){
        res.send(data);
        console.log(data);

    });
});
app.delete('/delete',function(req,res){

        console.log(req.body);
});

//ekle
app.post('/kullaniciEkle', function (req, res) {   
    console.log(req.body);
});
    
app.get('/ekle',function(req,res){
    res.sendFile(path.join(__dirname + '\\ekle.html'));
});

app.get('/login',function(req,res){
   
    res.sendFile(path.join(__dirname + '\\login.html'));

});



//girdiğinde direk root olarak alsın diye

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '\\index.html'));
});
//8090 portunu dinlemeye aldık
app.listen(8090,function(){    
    console.log('sunucu calisiyor');
});
