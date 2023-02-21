const connecttion = required("../config/database.js");

const getHomePage = (req, res) => {
  // simple query
  connection.query("SELECT * FROM Users ", function (err, results, fields) {
    console.log("check results", results); // results contains rows returned by server
    console.log("check fields", fields); // fields contains extra meta data about results, if available
  });
};

const getEjs = (req, res) => {
  res.render("sample.ejs");
};

module.exports = {
  getHomePage,
  getEjs,
};
