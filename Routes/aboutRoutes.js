const express = require("express");
const router = express.Router();
const aboutController = require("../controller/aboutController");

router.get("/about", (req, res) => {
  aboutController.about_us(req, res);
});

module.exports = router;
