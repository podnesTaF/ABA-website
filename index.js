/** @format */

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
require('dotenv').config();
// const { Client } = require('pg');
// const flash = require('connect-flash');

const mainRouter = require('./routes');
// const authRouter = require('./routes/auth');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
// app.use(flash());

app.use(mainRouter);
// app.use(authRouter)

// const db = require('./models');
// db.sequelize
//   .sync()
//   .then(() => {
//     console.log('Synced db.');
//   })
//   .catch((err) => {
//     console.log('Failed to sync db: ' + err.message);
//   });

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log('server is running on port ' + PORT);
});
