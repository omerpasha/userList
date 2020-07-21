
const sqlite3=require('sqlite3').verbose();

let db =new sqlite3.Database('./kayıtlar.db',(err)=>{
    
            if(err){
                console.log(err.message);
    }
    console.log('connected database');

    db.close((err)=>
    {
        if(err){
            console.log(err.message);
        }
    })
    console.log('database connection is closed')

});