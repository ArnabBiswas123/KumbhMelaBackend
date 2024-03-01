const About = require("../../models/AboutKumbhModel");

const getAbout=async(req,res)=>{
    try {
        const allsections=await About.find({});
        return res.json({success:true, data:allsections})
        
    } catch (error) {
        console.log(err);
        res.json({ success: false,msg:'Internal server error' });
    }

}
module.exports=getAbout