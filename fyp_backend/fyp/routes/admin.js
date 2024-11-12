const express = require("express");

const { body } = require("express-validator");
const Admin = require("../models/admin");
const City = require("../models/city");

const router = express.Router();

const dashboardController = require("../controller/dashboard");
const adminsController = require("../controller/adminsController");
const cityController = require("../controller/cityController");
const usersController = require("../controller/usersController");
const profileController = require("../controller/profileController");
const paymentController = require("../controller/paymentsController");
const isAuth = require("../middleware/is-auth");
const checkRole = require("../middleware/check-role");

router.get("/", isAuth, dashboardController.index);

router.get("/adminUsers/all", isAuth, checkRole, adminsController.index);
router.get("/adminUsers/create", isAuth, checkRole, adminsController.create);
router.post(
  "/adminUsers/create",
  [
    body("email")
      .isEmail()
      .withMessage("Please enter a valid email.")
      .custom((value, {}) => {
        return Admin.findOne({ email: value }).then((adminDoc) => {
          if (adminDoc) {
            return Promise.reject(
              "Email already exists, please pick a different one"
            );
          }
        });
      }),
    body("name")
      .isAlphanumeric()
      .withMessage("Name can only contain numbers and characters")
      .isLength({ min: 3 })
      .trim()
      .withMessage("Name must have a min length of 3"),
    body("username")
      .isAlphanumeric()
      .withMessage("Username can only contain numbers and characters")
      .isLength({ min: 3 })
      .withMessage("Username must have a min length of 3")
      .custom((value, {}) => {
        return Admin.findOne({ username: value }).then((adminDoc) => {
          if (adminDoc) {
            return Promise.reject(
              "Username already exists, Please pick a different one"
            );
          }
        });
      })
      .trim(),
    body("password")
      .isLength({ min: 8 })
      .withMessage("Password must have a min length of 8")
      .trim(),
    body("role")
      .notEmpty()
      .trim()
      .withMessage("Please select at least one option"),
    body("status")
      .notEmpty()
      .trim()
      .withMessage("Please select at least one option"),
  ],
  isAuth,
  checkRole,
  adminsController.store
);
router.get("/adminUsers/:adminId/edit", isAuth, adminsController.edit);
router.post(
  "/adminUsers/:adminId/edit",
  [
    body("email")
      .isEmail()
      .withMessage("Please enter a valid email.")
      .custom((value, {req}) => {
        let currentId = req.params.adminId;
        return Admin.findOne({ email: value }).then((adminDoc) => {
          if (adminDoc) {
            if (adminDoc._id != currentId) {
              return Promise.reject(
                "Email already exists, please pick a different one"
              );
            }
          }
        });
      }),
    body("name")
      .isAlphanumeric()
      .withMessage("Name can only contain numbers and characters")
      .isLength({ min: 3 })
      .trim()
      .withMessage("Name must have a min length of 3"),
    body("username")
      .isAlphanumeric()
      .withMessage("Username can only contain numbers and characters")
      .isLength({ min: 3 })
      .withMessage("Username must have a min length of 3")
      .custom((value, {req}) => {
        let currentId = req.params.adminId;
        return Admin.findOne({ username: value }).then((adminDoc) => {
          if (adminDoc) {
            if (adminDoc._id != currentId) {
              return Promise.reject(
                "Username already exists, Please pick a different one"
              );
            }
          }
        });
      })
      .trim(),
    body("password")
      .optional({ checkFalsy: true }) 
      .isLength({ min: 8 })
      .withMessage("Password must have a min length of 8")
      .trim(),
    body("role")
      .notEmpty()
      .trim()
      .withMessage("Please select at least one option"),
    body("status")
      .notEmpty()
      .trim()
      .withMessage("Please select at least one option"),
  ],
  isAuth,
  checkRole,
  adminsController.update
);
router.post("/adminUsers/:adminId/delete", isAuth, adminsController.delete);

//Cities
router.get("/cities/all", isAuth, cityController.index);
router.get("/cities/add", isAuth, cityController.create);
router.post(
  "/cities/add",
  isAuth,
  checkRole,
  [
    body("name")
      .isLength({ min: 3 })
      .withMessage("Name must have a min length of 3")
      .trim(),
    body("status")
      .notEmpty()
      .trim()
      .withMessage("Please select at least one option"),
  ],
  cityController.store
);
router.get("/cities/:cityId/edit", isAuth, cityController.edit);
router.post(
  "/cities/:cityId/edit",
  [
    body("name")
      .isLength({ min: 3 })
      .trim()
      .withMessage("Name must have a min length of 3")
      .custom((value, req) => {
        let currentId = req.params.cityId;
        return City.findOne({ name: value }).then((cityDoc) => {
          if (cityDoc) {
            if (cityDoc._id != currentId) {
              return Promise.reject(
                "City with this name already exists, please pick a different one"
              );
            }
          }
        });
      }),
    body("status")
      .notEmpty()
      .trim()
      .withMessage("Please select at least one option"),
  ],
  isAuth,
  checkRole,
  cityController.update
);
router.post("/cities/:cityId/delete", isAuth, cityController.delete);

//Users
router.get("/users/all", isAuth, usersController.index);
router.get("/users/create", isAuth, usersController.create);
router.post(
  "/users/create",
  [
    body("name")
      .matches(/^[a-zA-Z\s]+$/)
      .withMessage("Name can only contain numbers and characters")
      .isLength({ min: 3 })
      .trim()
      .withMessage("Name must have a min length of 3"),
    body("address")
      .notEmpty()
      .trim()
      .withMessage("The Address fiels is required"),
    body("phone_number")
      .isInt()
      .withMessage("Phone number must be in number")
      .isLength({ min: 11, max: 11 })
      .withMessage("Phone number must be 11 digits long"),
    body("city")
      .notEmpty()
      .trim()
      .withMessage("Please select at least one option"),
    body("zakat_status")
      .notEmpty()
      .trim()
      .withMessage("Please select at least one option"),
    body("status")
      .notEmpty()
      .trim()
      .withMessage("Please select at least one option"),
  ],
  isAuth,
  checkRole,
  usersController.store
);
router.get("/users/:userId/edit", isAuth, usersController.edit);
router.post(
  "/users/:userId/edit",
  [
    body("name")
      .matches(/^[a-zA-Z\s]+$/)
      .withMessage("Name can only contain numbers and characters")
      .isLength({ min: 3 })
      .trim()
      .withMessage("Name must have a min length of 3"),
    body("address")
      .notEmpty()
      .trim()
      .withMessage("The Address fiels is required"),
    body("phone_number")
      .isInt()
      .withMessage("Phone number must be in number")
      .isLength({ min: 11, max: 11 })
      .withMessage("Phone number must be 11 digits long"),
    body("city")
      .notEmpty()
      .trim()
      .withMessage("Please select at least one option"),
    body("zakat_status")
      .notEmpty()
      .trim()
      .withMessage("Please select at least one option"),
    body("status")
      .notEmpty()
      .trim()
      .withMessage("Please select at least one option"),
  ],
  isAuth,
  checkRole,
  usersController.update
);
router.post("/users/:userId/delete", isAuth, usersController.delete);

//Profile
router.get("/profile/:adminId/edit", isAuth, profileController.edit);
router.post(
  "/profile/:adminId/edit",
  [
    body("email")
      .isEmail()
      .withMessage("Please enter a valid email.")
      .custom((value, { req }) => {
        let currentId = req.params.adminId;
        return Admin.findOne({ email: value }).then((adminDoc) => {
          if (adminDoc) {
            if (adminDoc._id != currentId) {
              return Promise.reject(
                "Email already exists, please pick a different one"
              );
            }
          }
        });
      }),
    body("name")
      .isAlphanumeric()
      .withMessage("Name can only contain numbers and characters")
      .isLength({ min: 3 })
      .trim()
      .withMessage("Name must have a min length of 3"),
    body("username")
      .isAlphanumeric()
      .withMessage("Username can only contain numbers and characters")
      .isLength({ min: 3 })
      .withMessage("Username must have a min length of 3")
      .custom((value, {req}) => {
        let currentId = req.params.adminId;
        return Admin.findOne({ username: value }).then((adminDoc) => {
          if (adminDoc) {
            if (adminDoc._id != currentId) {
              return Promise.reject(
                "Username already exists, Please pick a different one"
              );
            }
          }
        });
      })
      .trim(),
    body("password")
      .optional({ checkFalsy: true }) // Make password field optional
      .isLength({ min: 8 })
      .withMessage("Password must have a min length of 8")
      .trim()
  ],
  isAuth,
  checkRole,
  profileController.update
);

//Payments
router.get("/payments/all", isAuth, checkRole, paymentController.index);
router.get("/payments/changeStatus/:id", isAuth,  checkRole, paymentController.changeStatus);
module.exports = router;
