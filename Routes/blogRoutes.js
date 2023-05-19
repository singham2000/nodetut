const express = require("express");
const router = express.Router();
const Blogs = require("../models/blog");
const blogController = require("../controller/blogConroller");

router.get("/", (req, res) => {
  blogController.blog_index(req, res);
});

router.get("/create", (req, res) => {
  blogController.blog_create(req, res);
});

router.get("/blogs/:id", (req, res) => {
  blogController.blog_details(req, res);
});

//post requests
router.post("/blogs", (req, res) => {
  blogController.blog_save(req, res);
});

// Delete requests

router.delete("/blogs/:id", (req, res) => {
  blogController.blog_delete(req, res);
});

module.exports = router;
