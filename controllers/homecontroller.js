var express = require('express');
var userModel = require.main.require('./model/user_model');
var router = express.Router();

router.get('/',(req,res)=>{
    res.render('home');

})



module.exports = router;


