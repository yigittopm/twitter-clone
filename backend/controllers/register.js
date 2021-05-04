const User = require("../models/User");

const register = async (req,res,next) => {

    const { username,password } = req.body;
    const user = await User.create({username, password});
    res.json(user);
}

module.exports = {
    register
}