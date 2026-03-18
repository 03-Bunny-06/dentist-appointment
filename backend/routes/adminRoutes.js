const {Router} = require("express");
const adminSignUpController = require("../controllers/adminController");
const router = Router();


router.post('/signup', adminSignUpController);

module.exports = router;