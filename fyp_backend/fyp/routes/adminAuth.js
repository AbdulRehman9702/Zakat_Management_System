const express = require("express");
const nodemailer = require("nodemailer");
const { check } = require("express-validator");
const { body } = require("express-validator");

const authController = require("../controller/authController");
const redirectIfAuth = require("../middleware/redirect-if-auth");
const isAuth = require("../middleware/is-auth");

const router = express.Router();

router.get("/login", redirectIfAuth, authController.getLogin);
router.post("/login", check(), redirectIfAuth, authController.postLogin);
router.get("/logout", isAuth, authController.logout);
router.get("/reset", authController.getReset);
router.post(
  "/reset",
  [body("email").isEmail().withMessage("Please enter a valid email")],
  authController.postReset
);
router.get('/reset/:token', authController.getNewPassword);
router.post('/new-password', [body('password').notEmpty().withMessage("Password field cannot be empty").custom((value, {req}) => {
  if(value != req.body.confirm_password) {
    return Promise.reject(
      "Passwords do not match"
    );
  } else {
    return true;
  }
})], authController.postNewPassword);

module.exports = router;
