const pool = require("../helpers/database");

const register = async (req,res,next) => {
    const { username, password, email} = await req.body;
    const data = await pool.query("Insert into users (username, password, email) values ($1, $2, $3)", [username, password, email]);
    res.json(data);
}

module.exports = {
    register
}