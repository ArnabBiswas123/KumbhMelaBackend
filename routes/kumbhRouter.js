const express = require('express');
const router = express.Router()
const createAbout=require('../controllers/AboutKumbh/createAbout');
const getAbout=require('../controllers/AboutKumbh/getAbout')

router.post('/createabout',createAbout);
router.get('/getabout',getAbout);



module.exports=router