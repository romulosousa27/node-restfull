/**
 * Configuração de Conexão com o banco de dados
 */
module.exports = {
    
    development: {
        database: {
            host: 'localhost',
            port: '3306',
            name: 'spoiler',
            dialect: 'postgres',
            user: 'postgres',
            password: 'senha',
        }
    },
    
    production: {
        database:{
            host: 'process.env.DB_HOST',
            port: 'process.env.DB_PORT',
        }
    }
}