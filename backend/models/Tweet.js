const Sequelize = require("sequelize");
const sequelize = require("../helpers/database");

const Tweet = sequelize.define("Tweet",{
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    user_id:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    text:{
        type: Sequelize.TEXT,
        allowNull:false
    }
})

module.exports = Tweet;