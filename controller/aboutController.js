const about_us = (req, res) => {
  res.render("about", { title: "About" });
};

module.exports = {
  about_us,
};
