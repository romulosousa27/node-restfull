/**
 * Configuração de Conexão com o banco de dados
 */
module.exports = {
    
    development: {
        database: {
            host: '192.168.1.7',
            port: '5432',
            name: 'NodeSpoilerAPI',
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