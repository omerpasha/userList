
var express = require('express');
var app = express();
var fs=require('fs');
url=require('url');
var cors = require('cors');
var path = require('path');
app.use(cors());
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/listele', function (req, res) {
    fs.readFile('users.json','utf-8',function(err,data){
        res.send(data);
        console.log(data);

    });
});
//ekle
app.post('/ekle', function (req, res) {   
    console.log(req.body);
});
    //console.log('ekleye geldi')
    // const yeni_kullanici={
    //     "k3":{
    //         "isim":"besim timuk",
            
    //         "tc":1321,

    //         "email":"besim@ahaha"
    //     }
    // }
    //const data = JSON.stringify(yeni_kullanici);

    // write JSON string to a file
    // fs.writeFile('users.json', data, (err) => {
    //     if (err) {
    //         throw err;
    //     }
    //     console.log("JSON data is saved.");
    // });





app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '\\index.html'));
});

app.listen(8090,function(){    
    console.log('sunucu calisiyor');
});
