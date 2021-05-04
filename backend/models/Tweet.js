const Sequelize = require("sequelize");
const sequelize = require("../helpers/database");

const Tweet = sequelize.define("Tweet",{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    user_id:{
        type: Sequelize.INTEGER
    },
    text:{
        type: Sequelize.TEXT
    }
})

module.exports = Tweet;