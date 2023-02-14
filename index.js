/** @format */

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
require("dotenv").config();
const { Client } = require("pg")
const flash = require('connect-flash');



const mainRouter = require('./routes');
const authRouter = require('./routes/auth');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(flash());

app.use(mainRouter);
app.use(authRouter)

const connectDb = async () => {
    try {
        const client = new Client({
            user: process.env.PGUSER,
            host: process.env.PGHOST,
            database: process.env.PGDATABASE,
            password: process.env.PGPASSWORD,
            port: process.env.PGPORT
        })

        await client.connect()
        await client.end()
    } catch (error) {
        console.log(error)
    }
}

connectDb()

const PORT = process.env.PORT;
app.listen(3001, () => {
    console.log('server is running on port ' + PORT);
});