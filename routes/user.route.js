const express = require("express");
const {registerUser, getAllUsers, login} = require("../controllers/user.controller");

const router = express.Router();

router.get("/allusers", getAllUsers);
router.post("/login", login);
router.post("/register", registerUser);

module.exports = router;
