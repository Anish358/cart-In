const express = require("express");
const authController = require("../Controllers/userController");

const router = express.Router();

router.post("/signup", authController.signup);
router.post("/login", authController.login);
router.put("/update", authController.update);
router.delete("/delete", authController.delete);

module.exports = router;
