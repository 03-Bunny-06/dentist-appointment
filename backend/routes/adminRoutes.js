const {Router} = require("express");
const {adminSignUpController, adminSignInController} = require("../controllers/adminController");
const router = Router();


router.post('/signup', adminSignUpController);
router.post('/signin', adminSignInController);

module.exports = router;