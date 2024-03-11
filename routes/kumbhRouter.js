const express = require('express');
const router = express.Router()
const createAbout=require('../controllers/AboutKumbh/createAbout');
const deleteAbout=require('../controllers/AboutKumbh/deleteAbout')
const editAbout=require('../controllers/AboutKumbh/editAbout')
const getallAbout=require('../controllers/AboutKumbh/getallAbout')
const getAboutByTitle = require('../controllers/AboutKumbh/getAboutByTitle');

const createPackage=require('../controllers/KumbhPackages/createPackage')
const getallpackage=require('../controllers/KumbhPackages/getallpackages')
const deletepackage=require('../controllers/KumbhPackages/deletePackage')
const editPackage=require('../controllers/KumbhPackages/editPackage')
const getPackageByTitle=require('../controllers/KumbhPackages/getPackageByTitle')
const getallFrontpagedata=require('../controllers/common/getallFrontpagedata')
const createAccomodation=require('../controllers/KumbhAccomodations/createAccomodation')
const deleteAccomodation=require('../controllers/KumbhAccomodations/deleteAccomodation')
const editAccomodation=require('../controllers/KumbhAccomodations/editAccomodation')
const getAccomodationByTitle=require('../controllers/KumbhAccomodations/getAccomodationByTitle')
const getallAccomodations=require('../controllers/KumbhAccomodations/getallAccomodations');





router.post('/createabout',createAbout);
router.put('/editabout',editAbout);
router.delete('/deleteabout/:id',deleteAbout)
router.get('/getallabout',getallAbout);
router.get('/getaboutbytitle',getAboutByTitle)


router.post('/createpackage',createPackage)
router.get('/getallpackage',getallpackage)
router.delete('/deletepackage/:id',deletepackage)
router.put('/editpackage',editPackage)
router.get('/getpackagebytitle/:title',getPackageByTitle)
router.get('/getallfrontpagedata',getallFrontpagedata)
router.post('/createaccomodation',createAccomodation);
router.get('/getallaccomodation',getallAccomodations);
router.put('/editaccomodation',editAccomodation);
router.delete('/deleteaccomodation/:id',deleteAccomodation);
router.get('/getaccomodationbytitle/:title',getAccomodationByTitle)
router.delete('/deleteabout/:id',deleteAbout);



module.exports=router