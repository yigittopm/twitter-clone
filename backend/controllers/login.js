const User = require("../models/User");

const login = async (req, res, next) => {
    const { username, password } = req.body;
    const logged = await User.findAll()
    res.json({
        logged
    })
}

module.exports = {
    login
}