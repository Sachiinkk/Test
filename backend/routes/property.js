const express = require("express");
const {
  getAllProperties,
  addProperty,
} = require("../controllers/propertyController");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

router.get("/", getAllProperties);
router.post("/", authMiddleware, addProperty);

module.exports = router;
