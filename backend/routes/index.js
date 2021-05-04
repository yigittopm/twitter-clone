const router = require('express').Router();

const registerController = require("../controllers/register");

router.get('/', (req,res) => res.send("OK"))
router.post('/register', registerController.registerUser);

module.exports = router;