const About = require("../../models/AboutKumbhModel");

const createAbout = async (req, res) => {
  try {
    const {title,image,description}=req.body
    if(title===undefined||image===undefined||description===undefined){
      return res.json({success:false, msg:'Send all fields'});
    }
    const sectionExists = await About.findOne({ title });
    if(sectionExists){
      return res.json({success:false, msg:'Section already exists'})
    }
    await About.create({
      title,
      image,
      description
    });
    return res.json({success:true})


  } catch(err) {
        console.log(err);
        res.json({ success: false,msg:'Internal server error' });
  }
};
module.exports = createAbout;
