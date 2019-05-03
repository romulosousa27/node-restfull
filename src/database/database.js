const Sequelize = require('sequilize');

const enviroment = process.env.NODE_ENV || ' development';

const config = require("../config/config")[enviroment];

/**
 * Iniciando com o ORM, com os dados de conexao
 */
const sequilize = new Sequelize(
    config.database.name,
    config.database.user,
    config.database.password,
    {
        host:config.database.host,
        dialect:config.database.dialect,
    }
);

module.exports = sequilize;