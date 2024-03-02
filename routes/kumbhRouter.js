const express = require('express');
const router = express.Router()
const createAbout=require('../controllers/AboutKumbh/createAbout');
const getAbout=require('../controllers/AboutKumbh/getAbout')
const deleteAbout=require('../controllers/AboutKumbh/deleteAbout')
const editAbout=require('../controllers/AboutKumbh/editAbout')

router.post('/createabout',createAbout);
router.get('/getabout',getAbout);
router.delete('/deletesection/:id',deleteAbout)
router.put('/editabout',editAbout);



module.exports=router