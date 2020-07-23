const sqlite3=require('sqlite3').verbose();
let db;
function openDb(){
    
    
    db=new sqlite3.Database('kayıtlar.db');

    
}



module.exports.insert_user=(user)=>{
    openDb();

        db.run('INSERT into kullanicilar (tc,isim,email) values('+user.tc+',"'+user.isim+'","'+user.email+'")',function(err,row){

             if(err){
      
                 console.log(err.message);
      
             }
                 console.log('1 row is inserted')

                
 });
db.close();

}

module.exports.delete_user=(user)=>{
   console.log(user);
     console.log('delete user db.js');
     openDb();
     db.run('DELETE from kullanicilar where tc ='+user.tc),function(err,row){


     if(err){
             console.log(err.message);
         }

         console.log('1 row is deleted');

 };

 db.close();

}

