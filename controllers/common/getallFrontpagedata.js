const KumbhPakage=require('../../models/KumbhPakage')
const KumbhAccomodation=require('../../models/KumbhAccomodation')
const About = require("../../models/KumbhAbout");
const getallFrontpagedata=async(req,res)=>{
    try {
        const packages = await KumbhPakage.find({}, { about: 0 }); // Exclude the 'about' field
        const accomodations=await KumbhAccomodation.find({},{about:0});
        const about=await About.find({},{about:0});
        res.json({success:true,packages:packages, accomodations: accomodations, about:about});
    } catch (error) {
        console.log(error);
    res.json({ success: false, msg: "Internal server error" });
    }
}
module.exports=getallFrontpagedata;