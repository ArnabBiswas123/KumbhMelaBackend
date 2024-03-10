const express = require('express');
const router = express.Router()
const createAbout=require('../controllers/AboutKumbh/createAbout');
const getAbout=require('../controllers/AboutKumbh/getAbout')
const deleteAbout=require('../controllers/AboutKumbh/deleteAbout')
const editAbout=require('../controllers/AboutKumbh/editAbout')
const createMetaTag=require('../controllers/AboutKumbh/createMetaTag')
const getMetaTags=require('../controllers/AboutKumbh/getMetaTags')
const deleteAboutMeta=require('../controllers/AboutKumbh/deleteMetaTag')
const editMetatag=require('../controllers/AboutKumbh/editMetatag')
const getallAbout=require('../controllers/AboutKumbh/getallAbout')
const createPackage=require('../controllers/KumbhPackages/createPackage')
const getallpackage=require('../controllers/KumbhPackages/getallpackages')
const deletepackage=require('../controllers/KumbhPackages/deletePackage')
const editPackage=require('../controllers/KumbhPackages/editPackage')
const getPackageByTitle=require('../controllers/KumbhPackages/getPackageByTitle')

router.post('/createabout',createAbout);
router.get('/getabout',getAbout);
router.delete('/deletesection/:id',deleteAbout);
router.put('/editabout',editAbout);
router.post('/createmeta',createMetaTag);
router.get('/getmetatags',getMetaTags);
router.delete('/deletemetatag/:id',deleteAboutMeta);
router.put('/editmetatag',editMetatag);
router.get('/getallabout',getallAbout);
router.post('/createpackage',createPackage)
router.get('/getallpackage',getallpackage)
router.delete('/deletepackage/:id',deletepackage)
router.put('/editpackage',editPackage)
router.get('/getpackagebytitle/:title',getPackageByTitle)




module.exports=router