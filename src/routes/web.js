const express = require("express");
const router = express.Router();
const {
  getHomePage,
  getEjs,
  createUser,
} = require("../controllers/homeController");

router.get("/", getHomePage);
router.get("/ejs", getEjs);
router.post("/create-user", createUser);
module.exports = router;
