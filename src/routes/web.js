const express = require("express");
const router = express.Router();
const {
  getHomePage,
  getEjs,
  createUser,
  getCreateForm,
  updateUserPage,
} = require("../controllers/homeController");

router.get("/", getHomePage);
router.get("/ejs", getEjs);
router.get("/create", getCreateForm);
router.post("/create-user", createUser);
router.get("/update", updateUserPage);
module.exports = router;
