const connection = require("../config/database.js");

const getHomePage = (req, res) => {
  // simple query
  return res.render("home.ejs");
};

const getEjs = (req, res) => {
  res.render("sample.ejs");
};

const createUser = (req, res) => {
  let email = req.body.email;
  let name = req.body.name;
  let city = req.body.city;
  console.log(">>> check req.body", email, name, city);
  connection.query(
    `INSERT INTO Users (email, name, city) VALUES (?,?,?)`,
    [email, name, city],
    function (err, results) {
      console.log(results);
      console.log(">>> Create user success");
    }
  );
  //   INSERT INTO Users (email, name, city)
  // VALUES ("long@gmail.com","long","hanam");

  res.send("Create new user");
};

module.exports = {
  getHomePage,
  getEjs,
  createUser,
};
