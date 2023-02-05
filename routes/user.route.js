const express = require("express");
const {registerUser,deleteAllUsers, getAllUsers, login} = require("../controllers/user.controller");

const router = express.Router();

router.get("/allusers", getAllUsers);
router.post("/login", login);
router.post("/register", registerUser);
router.delete("/delete", deleteAllUsers);

module.exports = router;
