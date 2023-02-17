import express from "express";
import path from "path";
const app = express();
const port = 8080;
const __dirname = path.resolve();
// config template engine
app.set("views", path.join(__dirname, "/src/views"));
console.log(">>> check dirname", __dirname);
// app.set("views", "./views/");
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.send("Hello World! long tran");
});
app.get("/ejs", (req, res) => {
  res.render("sample.ejs");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
