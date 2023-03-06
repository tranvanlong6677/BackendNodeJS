const express = require("express");
const path = require("path");
const dotenv = require("dotenv").config();
// import configViewEngine from "./config/viewEngine";
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");
const connection = require("./config/database");

const app = express();
const port = process.env.PORT || 8080;
const hostname = process.env.HOST_NAME;
// const __dirname = path.resolve();

app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded({ extended: true })); //Parse URL-encoded bodies

configViewEngine(app);
app.use("/", webRoutes);

// test connection db
// get the client

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
