const mongoose=require('mongoose');
//defining the schema for the task 
const taskSchema=new mongoose.Schema({
    //text fot the task
    description:{
        type:String,
        required:true
    },
    // category of the task 
    category:{
        type:String,
        default:""
    },
    //due date for the task
    date:{
        type:Date
    },
    //status for checked and unchecked tasks
    status:{
        type:Boolean,
        default:false
    }
});

const Task=mongoose.model('Tasks',taskSchema);
module.exports=Task;