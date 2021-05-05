const Sequelize = require('sequelize');
const sequelize = require('../helpers/database');

const User = sequelize.define('User', {
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    username:{
        type: Sequelize.STRING(25),
        allowNull: false
    },
    password:{
        type: Sequelize.STRING(255),
        allowNull: false
    },
    imageUrl:{
        type: Sequelize.STRING(15),
        defaultValue: 'anon.png'
    }
})

module.exports = User;