const express = require('express');
const router = express.Router()
const createcustomer=require('../controllers/Customer/createcustomer')
const getallcustomer=require('../controllers/Customer/getallcustomer')

router.post('/createcustomer',createcustomer);
router.get('/getallcustomer',getallcustomer)
module.exports=router;