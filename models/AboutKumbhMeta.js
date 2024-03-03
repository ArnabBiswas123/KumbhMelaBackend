const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Section = new Schema({
  meta_title: { type: String, required: true },
  meta_description:{ type: String, required: true }
},{
  timestamps:true
});

module.exports = mongoose.model("AboutMetaTag", Section);