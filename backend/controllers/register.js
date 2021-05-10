const pool = require("../helpers/database");

const register = async (req,res,next) => {
    const { username, password, email} = await req.body;

    //test
    const email_regex = /([a-zA-Z0-9_]+)@([a-zA-Z]+)(\.[a-z]{2,})/g;

    if(email_regex.test(email)){
        const data = await pool.query(process.env.DB_INSERT, [username, password, email]);
        res.json(data)
    }else{
        res.json("Hatalı")
    }
}

module.exports = {
    register
}