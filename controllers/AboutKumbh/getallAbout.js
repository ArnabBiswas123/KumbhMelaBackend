const AboutMetaTag = require("../../models/AboutKumbhMeta");
const About = require("../../models/AboutKumbhModel");
const getallAbout=async(req,res)=>{
    try {
        const allsections=await About.find({});
        const allmetatags=await AboutMetaTag.find({});
        return res.json({success:true,sections:allsections,meta_tags:allmetatags})
        
    } catch (error) {
        console.log(err);
        res.json({ success: false,msg:'Internal server error' });
    }
}
module.exports=getallAbout