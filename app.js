const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const { result } = require("lodash");

const blogRoutes = require("./Routes/blogRoutes");
const aboutRoutes = require("./Routes/aboutRoutes");
// connect mongodb
const dbURI = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_NAME}.sbunmxg.mongodb.net/blogs?retryWrites=true&w=majority`;

app.set("view engine", "ejs");

//encoders
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

try {
  mongoose.connect(dbURI).then((res) => {
    console.log("DB connected");
    app.listen(3000, function () {
      console.log("listening on port 3000");
    });
  });
} catch (err) {
  console.log(err);
}

app.use(blogRoutes);
app.use(aboutRoutes);

app.use((req, res) => {
  res.status(404).render("404", { title: "404 Error" });
});
