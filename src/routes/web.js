const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World! long tran111");
});
router.get("/ejs", (req, res) => {
  res.render("sample.ejs");
});
module.exports = router;
