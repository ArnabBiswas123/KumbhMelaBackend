const AboutMetaTag = require("../../models/AboutKumbhMeta");

const getMetaTags=async(req,res)=>{
    try {
        const allmetatags=await AboutMetaTag.find({});
        return res.json({success:true, data:allmetatags})
        
    } catch (error) {
        console.log(err);
        res.json({ success: false,msg:'Internal server error' });
    }

}
module.exports=getMetaTags