const sqlite3=require('sqlite3').verbose();

let db=new sqlite3.Database('./kayıtlar.db');


db.run('ALTER TABLE kullanicilar RENAME COLUMN name TO isim ',function(err){

    if(err){
        console.log(err.message)
    }
    console.log('table is updated 1 column')
})