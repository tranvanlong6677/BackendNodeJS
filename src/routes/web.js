const express = require("express");
const router = express.Router();
const {
  getHomePage,
  getEjs,
  createUser,
  getCreateForm,
} = require("../controllers/homeController");

router.get("/", getHomePage);
router.get("/ejs", getEjs);
router.post("/create-user", createUser);
router.get("/create", getCreateForm);
module.exports = router;
