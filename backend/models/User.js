const Sequelize = require('sequelize');
const sequelize = require('../helpers/database');

const User = sequelize.define('User', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    username:{
        type: Sequelize.STRING(25),
        allowNull: false
    },
    password:{
        type: Sequelize.STRING(255),
        allowNull: false
    }
})

module.exports = User;