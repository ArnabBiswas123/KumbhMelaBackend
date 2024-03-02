const About = require("../../models/AboutKumbhModel");
const editAbout = async (req, res) => {
  try {
    const { id, title, image, description } = req.body;
    if (
      id === undefined ||
      title === undefined ||
      image === undefined ||
      description === undefined
    ) {
      return res.json({ success: false, msg: "Send all fields" });
    }
    const editSection = await About.findByIdAndUpdate(
      id,
      {
        title: title,
        image: image,
        description: description,
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
module.exports = editAbout;
