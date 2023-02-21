const express = require("express");
const path = require("path");
const dotenv = require("dotenv").config();
// import configViewEngine from "./config/viewEngine";
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");
const mysql = require("mysql2");

const app = express();
const port = process.env.PORT || 8080;
const hostname = process.env.HOST_NAME;
// const __dirname = path.resolve();
configViewEngine(app);
app.use("/", webRoutes);

// test connection db
// get the client

// create the connection to database
const connection = mysql.createConnection({
  host: "localhost",
  port: 3307,
  user: "root",
  password: "123456",
  database: "hoidanit",
});
// simple query
connection.query("SELECT * FROM Users ", function (err, results, fields) {
  console.log("check results", results); // results contains rows returned by server
  console.log("check fields", fields); // fields contains extra meta data about results, if available
});

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
