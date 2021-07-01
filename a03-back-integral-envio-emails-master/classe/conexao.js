
const knex = require('knex')({
    client: 'pg',
    connection: {
        host: 'localhost',
        user: 'postgres',
        password: '123456',          
        database: 'market_cubos',
        Port: 5432
    }
})

module.exports = knex

