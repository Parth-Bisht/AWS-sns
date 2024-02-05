const express = require("express");
const { createUser } = require("../controllers/userController");
const router = express.Router();

router.post("/create-user",createUser);
// router.get("/get-user")

module.exports = router;