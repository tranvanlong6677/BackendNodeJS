const connection = require("../config/database.js");

const getHomePage = (req, res) => {
  // simple query
  return res.render("home.ejs");
};

const getEjs = (req, res) => {
  res.render("sample.ejs");
};
const getCreateForm = (req, res) => {
  return res.render("create.ejs");
};

const createUser = async (req, res) => {
  let email = req.body.email;
  let name = req.body.name;
  let city = req.body.city;
  console.log(">>> check req.body", email, name, city);
  const [results, fields] = await connection.execute(
    `INSERT INTO Users (email, name, city) VALUES (?,?,?)`,
    [email, name, city]
  );
  console.log(">>> check results", results);
  res.send("Create new user");
};

module.exports = {
  getHomePage,
  getEjs,
  createUser,
  getCreateForm,
};
