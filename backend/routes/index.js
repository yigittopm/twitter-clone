const router = require('express').Router();

const homeRouter = require("./home");
const loginRouter = require("./login");
const registerRouter = require("./register");

router.use('/home', homeRouter);
router.use('/login', loginRouter)
router.use('/register', registerRouter);

module.exports = router;