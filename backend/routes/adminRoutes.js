const {Router} = require("express");
const { adminSignUpController, adminSignInController } = require("../controllers/adminController");
const adminMiddleware = require("../middlewares/adminAuthMiddleware");
const { getAllDentistsController } = require("../controllers/dentistController");
const { getAllAppointmentsController } = require("../controllers/appointmentController");
const router = Router();

router.post('/signup', adminSignUpController);
router.post('/signin', adminSignInController);
router.get('/dentists', adminMiddleware, getAllDentistsController);
router.get('/appointments', adminMiddleware, getAllAppointmentsController);

module.exports = router;