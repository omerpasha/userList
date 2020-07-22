const sqlite3=require('sqlite3').verbose();

let db=new sqlite3.Database('./kayıtlar.db')

db.run('INSERT into kullanicilar (vatandaslik_id,name)values(10,"ali")',function(err,row){

            if(err){
      
                console.log(err.message);
      
            }
                console.log('1 row is inserted')

                
});

