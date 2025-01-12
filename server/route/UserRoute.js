const express = require("express");
const router = express.Router();

const {
  login,
  signup,
  sendotp,
  changePassword,
} = require("../controllers/Auth");

const {
  resetPasswordToken,
  resetPassword,
} = require("../controllers/ResetPassword");

const { auth } = require("../middleware/authMiddleware");
const { isDemo } = require("../middleware/demo");

router.post("/login", login);
router.post("/signup", signup);

router.post("/sendotp", sendotp);

router.post("/changepassword", auth, isDemo, changePassword);

router.post("/reset-password-token", resetPasswordToken);

router.post("/reset-password", resetPassword);

module.exports = router;
