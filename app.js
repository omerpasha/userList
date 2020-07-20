/*gereklilikler eklendi*/ 
var express = require('express');
var app = express();
var fs=require('fs');
var url=require('url');
var cors = require('cors');
var path = require('path');




app.use(cors());//cors hatasını gidermek için
const bodyParser = require('body-parser');
const { json } = require('body-parser');

 var users;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
/*kullanıcıları listelemek için*/
app.get('/listele', function (req, res) {
     fs.readFile('users.json','utf-8',function(err,data){
        res.send(data);
        console.log(data);

       users=data;

    });
});
app.delete('/delete',function(req,res){

        console.log(req.body);
});

app.put('/kullaniciDuzenle',function(req,res){
   
    console.log(req.param.id);

});

 app.get('/kullaniciGetir/:id',function(req,res){
    
    var id=req.params.id;
    
    fs.readFile('users.json','utf-8',function(err,data){
        var records=[];
        records=JSON.parse(fs.readFileSync('users.json','utf-8'));
        console.log(records);
        console.log(records.length);

            for(var i=0;i<records.length;i++){
                if(records[i].tc==id){
                    console.log('kullanici'+id);
                    break ;
                }
                else{
                    console.log('kullanici bulunamadi');
                }

            }
        });
    });



app.post('/kullaniciEkle', function (req, res) {   
    console.log(req.body);
});
    
app.get('/ekle',function(req,res){
    res.sendFile(path.join(__dirname + '\\ekle.html'));
});

app.get('/login',function(req,res){
   
    res.sendFile(path.join(__dirname + '\\login.html'));

});

app.get('/edit/:id',function(req,res){
    //yönlednirme id ile olan
    res.sendFile(path.join(__dirname+'\\edit.html'));//dosya adı

});




//girdiğinde direk root olarak alsın diye

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '\\index.html'));
});


//8090 portunu dinlemeye aldık
app.listen(8090,function(){    
    console.log('sunucu calisiyor');
});

