const connection = require("../config/database.js");

const getHomePage = (req, res) => {
  // simple query
  return res.render("home.ejs");
};

const getEjs = (req, res) => {
  res.render("sample.ejs");
};

const createUser = (req, res) => {
  console.log(">>> check req.body", req.body);
  res.send("Create new user");
};

module.exports = {
  getHomePage,
  getEjs,
  createUser,
};
