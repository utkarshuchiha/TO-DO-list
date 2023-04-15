const mongoose=require('mongoose');
//connect to database
mongoose.connect('mongodb://localhost/To_Do_List_DB');
//to check the connection acquire it 
const db=mongoose.connection;
//error handling
db.on('error',console.error.bind(console,'error in connecting to the database'));
//once connection is successfull
db.once('open',()=>{
    console.log('SUccessfully connecte to the db');
});

module.exports=db;