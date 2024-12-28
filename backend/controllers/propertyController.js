const Property = require("../models/Property");

const getAllProperties = async (req, res) => {
  try {
    const properties = await Property.find();
    res.json(properties);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const addProperty = async (req, res) => {
  const { title, description, price, location } = req.body;
  try {
    const property = new Property({ title, description, price, location });
    await property.save();
    res.status(201).json(property);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getAllProperties, addProperty };
