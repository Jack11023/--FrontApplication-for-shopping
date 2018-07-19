var express=require('express');
var handler=require('./handler.js')
var router=express.Router();


    router.get('/lunbo',handler.lunbo);


module.exports=router;