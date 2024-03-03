const AboutMetaTag = require("../../models/AboutKumbhMeta");
const createMetaTag = async (req, res) => {
  try {
    const { meta_title, meta_description } = req.body;
    if (meta_title === undefined || meta_description === undefined) {
      return res.json({ success: false, msg: "Send all fields" });
    }
    const metaExists = await AboutMetaTag.findOne({ meta_title });
    if (metaExists) {
      return res.json({ success: false, msg: "Meta tag already exists" });
    }
    await AboutMetaTag.create({
      meta_title,
      meta_description,
    });
    return res.json({ success: true });
  } catch (err) {
    console.log(err);
    res.json({ success: false, msg: "Internal server error" });
  }
};
module.exports = createMetaTag;
