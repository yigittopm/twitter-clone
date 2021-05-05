const pool = require("../helpers/database");

const getAllTweets = async (req, res, next) => {
    const {rows} = await pool.query("SELECT * FROM tweets");
    res.json(rows);
}

const getOneTweet = async (req, res, next) => {
    const {id} = await req.params;
    const data = await pool.query("SELECT * FROM tweets where tweet_id=($1)", [id]);
    
    res.json(data.rows);
}

module.exports = {
    getAllTweets,
    getOneTweet
}