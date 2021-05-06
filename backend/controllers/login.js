const pool = require("../helpers/database");

const login = async (req, res, next) => {
    const { username, password } = await req.body;
    const data = await pool.query("SELECT * FROM users where username=($1) and password=($2)",[username,password]);
    res.json(data);
}

module.exports = {
    login
}