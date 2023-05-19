const Blogs = require("../models/blog");
const blog_index = (req, res) => {
  Blogs.find()
    .then((result) => {
      res.render("index", { title: "All Blogs", blogs: result });
    })
    .catch((err) => console.log(err));
};

const blog_details = (req, res) => {
  const id = req.params.id;
  // console.log(id);
  Blogs.findById(id)
    .then((result) => {
      res.render("details", { title: result.title, blog: result });
    })
    .catch((err) => console.log(err));
};

const blog_create = (req, res) => {
  res.render("createblog", { title: "Create Blog" });
};

const blog_save = (req, res) => {
  const blog = new Blogs(req.body);
  blog
    .save()
    .then((result) => {
      res.redirect("/");
    })
    .catch((err) => console.log(err));
};
const blog_delete = (req, res) => {
  const id = req.params.id;
  Blogs.findByIdAndDelete(id)
    .then((result) => {
      res.json({ redirect: "/" });
    })
    .catch((err) => console.log(err));
};

module.exports = {
  blog_index,
  blog_details,
  blog_create,
  blog_save,
  blog_delete
};
