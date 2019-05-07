/**
 * Configuração de Conexão com o banco de dados
 */
module.exports = {
    
    development: {
        database: {
            host: '127.0.0.1',
            port: '5432',
            name: 'nodespoilerapi',
            dialect: 'mysql',
            user: 'root',
            password: '',
        }
    },
    
    production: {
        database:{
            host: 'process.env.DB_HOST',
            port: 'process.env.DB_PORT',
        }
    }
};