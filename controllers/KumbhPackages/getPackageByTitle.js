const KumbhPakage=require('../../models/KumbhPakage')
const getPackageByTitle=async(req,res)=>{
    try {
        const { title } = req.params;
    
        // Find the package by its title
        const package = await KumbhPakage.findOne({ title });
    
        // If the package doesn't exist, return error
        if (!package) {
          return res.json({ success: false, msg: "Package not found" });
        }
    
        // If the package exists, return it
        return res.json({ success: true, data:package });
      } catch (error) {
        console.log(error);
        res.json({ success: false, msg: "Internal server error" });
      }
}
module.exports=getPackageByTitle