const express = require('express');
const router = express.Router()
const createcustomer=require('../controllers/Customer/createcustomer')
const getallcustomer=require('../controllers/Customer/getallcustomer')
const deletecustomer=require('../controllers/Customer/deletecustomer')

const {protect}=require('../middleware/authToken');
router.post('/createcustomer',createcustomer);
router.get('/getallcustomer',protect,getallcustomer)
router.delete('/deletecustomer/:id',protect,deletecustomer)
module.exports=router;