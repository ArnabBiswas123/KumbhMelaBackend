const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EnquireSchema = new Schema(
  {
    name: { type: String, required: true },
    mobile: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: Number},
    message: { type: String},
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Enquiry", EnquireSchema);