const Customer = require("../../models/Customer");

const createcustomer = async (req, res) => {
  try {
    const { name, email, mobile } = req.body;
    if (!name || !email || !mobile) {
      return req.json({ success: false, msg: "Send all fields" });
    }
    const customerExists = await Customer.findOne({ mobile });
    if (customerExists) {
      return res.json({ success: false, msg: "Mobile number Already Exists" });
    }
    await Customer.create({
      name: name,
      mobile: mobile,
      email: email,
      no_of_person: req.body.no_of_person ? req.body.no_of_person : null,
      date: req.body.date ? req.body.date : null,
      duration: req.body.duration ? req.body.duration : null,
      message: req.body.message ? req.body.message : null,
    });
    return res.json({ success: true, msg: "Successfully created" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, msg: "Internal server error" });
  }
};
module.exports = createcustomer;
