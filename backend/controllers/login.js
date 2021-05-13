const pool = require("../helpers/database");
const ErrorResponse = require("../utils/ErrorResponse");

const login = async (req, res, next) => {
    const { username, password } = await req.body;

    try{
        const user = await pool.query(
            "SELECT * FROM users where username=($1) and password=($2)",
            [username,password]
        );

        if(!user.username == username){
            return next(new ErrorResponse("Böyle bir kullanıcı yok."))
        }

        if(!user.password == password){
            return next(new ErrorResponse("Yanlış parola"));
        }


        localStorage.setItem("auth", "ok");
        
    }catch(err){
        next(new ErrorResponse(err, 400));
    }
}

module.exports = {
    login
}