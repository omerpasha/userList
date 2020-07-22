const sqlite3=require('sqlite3').verbose();
let db=new sqlite3.Database('/.kayıtlar.db');

db.run('DELETE from kullanicilar where vatandaslik_id = 1',function(err,row){


    if(err){
            console.log(err.message);
        }

        console.log('1 row is deleted');

});

db.close();
