const express = require("express");
const MongoClient = require('mongodb').MongoClient;
const router = express.router();

router.get("/",(req,res)=>{
    res.send("")
});
module.exports=router;