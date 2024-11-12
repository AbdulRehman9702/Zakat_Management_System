const express = require("express");


const usersController = require("../controller/Api/userController");

const router = express.Router();

// router.get('/api/getCsrfToken', (req, res) => {
//     res.json({ csrfToken: req.csrfToken() });
// });
router.get("/users/all", usersController.index);
router.get("/user/get/:userId", usersController.singleUserDetail);
router.post("/user/signup", usersController.signUpUser);
router.get("/user/getAllCities", usersController.getCities);
router.post("/create-checkout-session", usersController.checkoutSession);

module.exports = router;