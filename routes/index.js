const express=require('express');
const router=express.Router();
const homeController=require('../controller/homeController');

//route for the home 
router.get('/',homeController.home);
//middleware router to route '/task' routes
router.use('/task',require('./task'));


module.exports=router;
