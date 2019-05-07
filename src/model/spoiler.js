const Sequelize = require("sequelize");
const sequelize = require('../database/database');

/** Setting Model properties */
const Spoiler = sequelize.define("spoiler", {
    id:{
        allowNull: false, 
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
    },
    title:{
        allowNull: false,
        type: Sequelize.STRING(255),
        validade:{
            len: [2, 255]
        }
    },
    user:{
        allowNull: false,
        type: Sequelize.STRING,
        validade:{
            len:[2, 40]
        }
    },
    description:{
        allowNull: false,
        type: Sequelize.STRING,
        validade:{
            len:[2, 255]
        }
    }
});

module.exports = Spoiler;