const mongoose = require("mongoose");

const propertySchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  location: { type: String, required: true },
});

module.exports = mongoose.model("Property", propertySchema);
