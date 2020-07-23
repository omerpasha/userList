console.log('');
const app=require('./app.js');
var models;
const Sequelize = require('sequelize');



const sequelize = new Sequelize({
   host:'127.0.0.1',
    dialect: 'sqlite',
    storage: './database.sqlite',
    operatorAliases:false,
    dialectOptions:{
        encrtypt:true
    },
    pool:{
        max:5,
        min:0,
        acquire:30000,
        idle:10000

    }
});






// const sequelize=new Sequelize('kayıtlar.db','root','şifre',{
//     host:'127.0.0.1',
//     dialect: 'sqlite',
//     storage: './database.sqlite',
//     operatorAliases:false,
//     dialectOptions:{
//         encrtypt:true
//     },
//     pool:{
//         max:5,
//         min:0,
//         acquire:30000,
//         idle:10000

//     }
// });

const db={};

const DBSet=function(kullanicilar,properties){
    properties["isDeleted"]={type:Sequelize.BOOLEAN,defaultValue:false};
    properties["deletedAt"]=Sequelize.DATE;
    return sequelize.define(kullanicilar,properties);
}

db.User=db.User||DBSet('user',{
    id:{
        type:Sequelize.INTEGER,autoIncrement:true,primaryKey:true,
    },
    first_name:{type:Sequelize.STRING},
    last_name:{type:Sequelize.STRING },
    password:{type:Sequelize.STRING},
    locale:{type:Sequelize.STRING},
    is_confirmed:{type:Sequelize.BOOLEAN},
    birth_date:{type:Sequelize.STRING},
});



models.sequelize.sync({force:false}).then(function(){
    server.listen(port);
    server.on('error',onError);
    server.on('listening',onListening);
    console.log('database created succesfully');

});
module.exports=db;
module.exports=sequelize;
