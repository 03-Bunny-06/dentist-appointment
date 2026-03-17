const {Router} = require("express");
const {createDentistController, getAllDentistsController} = require("../controllers/dentistController");
const router = Router();

router.post('/', createDentistController);

router.get('/', getAllDentistsController);

module.exports = router;