const router = require('express').Router();

const loginRouter = require("./login");
const registerRouter = require("./register");

router.use('/login', loginRouter)
router.use('/register', registerRouter);

module.exports = router;