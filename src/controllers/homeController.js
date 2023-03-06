const connection = require("../config/database.js");

const getHomePage = (req, res) => {
  // simple query
  return res.render("home.ejs");
};

const getEjs = (req, res) => {
  res.render("sample.ejs");
};

module.exports = {
  getHomePage,
  getEjs,
};
