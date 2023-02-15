module.exports = {
    HOST: process.env.PGHOST,
    USER: process.env.PGUSER,
    DB: process.env.PGDATABASE,
    PASSWORD: process.env.PGPASSWORD,
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}