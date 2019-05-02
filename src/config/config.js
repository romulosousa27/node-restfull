module.exports = {
    
    development: {
        database: {
            host: '192.168.1.7',
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