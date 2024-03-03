const AboutMetaTag = require("../../models/AboutKumbhMeta");
const editMetatag = async (req, res) => {
  try {
    const { id, meta_title, meta_description } = req.body;
    if (
      id === undefined ||
      meta_title === undefined ||
      meta_description === undefined
    ) {
      return res.json({ success: false, msg: "Send all fields" });
    }
    const editSection = await AboutMetaTag.findByIdAndUpdate(
      id,
      {
        meta_title: meta_title,
        meta_description: meta_description,
      },
      { new: true }
    );
    if (!editSection) {
      return res.json({ success: false, msg: "Not valid id" });
    }

    return res.json({ success: true, data: editSection });
  } catch (error) {
    console.log(error);
    res.json({ success: false, msg: 'Internal server error'});
  }
};
module.exports = editMetatag;
