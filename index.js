/** @format */

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const mainRouter = require('./routes');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(mainRouter);

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log('server is running on port ' + PORT);
});