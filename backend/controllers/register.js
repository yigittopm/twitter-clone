const pool = require("../helpers/database");

const register = async (req,res,next) => {
    const { username, password, email} = await req.body;

    //test
    const username_regex = /^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$/g;
    const email_regex = /([a-zA-Z0-9_]+)@([a-zA-Z]+)(\.[a-z]{2,})/g;
    const password_regex = /^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$/g;

    try{
        if(!username_regex.test(username)){
            res.status(401).json({success: "false", message: "Username yanlış formda."});
        }

        if(!email_regex.test(email)){
            res.status(401).json({success: "false", message: "Email yanlış formda."});
        }

        if(!password_regex.test(password)){
            res.status(401).json({success: "false", message: "Password yanlış formda."});
        }

        const data = await pool.query(process.env.DB_INSERT, [username, password, email]);

        res.json({success: "true", data})

    }catch(error){
        res.json({succes: "error", error});
    }

}

module.exports = {
    register
}