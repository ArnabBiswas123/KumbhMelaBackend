const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AboutSchema = new Schema(
  {
    title: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    about:{type: String, required: true},
    meta_title: { type: String, required: true },
    meta_description: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("About", AboutSchema);