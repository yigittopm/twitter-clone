const pool = require("../helpers/database");

const login = async (req, res, next) => {
    const data = await pool.query("SELECT * FROM users;")
    res.json(data.rows)
}

module.exports = {
    login
}