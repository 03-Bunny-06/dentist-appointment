const {Router} = require("express");
const { createAppointmentController, getAllAppointmentsController } = require("../controllers/appointmentController");
const router = Router();

router.post('/', createAppointmentController);
router.get('/', getAllAppointmentsController);

module.exports = router;