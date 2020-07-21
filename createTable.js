const sqlite3=require('sqlite3').verbose();

let db=new sqlite3.Database('kayıtlar.db')

db.run('CREATE TABLE kullanicilar(vatandaslik_id INTEGER PRIMARY KEY,name text NOT NULL,email text NOT NULL);',function(err){
    if(err){
        return console.log(err.message)
    }
    console.log('table created');
})

db.close();



