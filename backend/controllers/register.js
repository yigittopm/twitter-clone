const pool = require("../helpers/database");

const register = async (req,res,next) => {
    const { username, password, email} = await req.body;

    //test
    const email_regex = /([a-zA-Z0-9_]+)@([a-zA-Z]+)(\.[a-z]{2,})/g;

    if(email_regex.test(email)){
        res.json("Başarılı")
    }else{
        res.json("Hatalı")
    }

    const data = await pool.query("Insert into users (username, password, email) values ($1, $2, $3)", [username, password, email]);
    res.json(data);
}

module.exports = {
    register
}