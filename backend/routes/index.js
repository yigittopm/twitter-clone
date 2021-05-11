const router = require('express').Router();

const { isLoggin } = require("../middlewares/auth");

const homeRouter = require("./home");
const loginRouter = require("./login");
const registerRouter = require("./register");

router.use('/home',isLoggin, homeRouter);
router.use('/login', loginRouter)
router.use('/register', registerRouter);

module.exports = router;