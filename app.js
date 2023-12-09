const express = require('express');
const morgan = require('morgan');
const routes = require('./src/routes/');
const app = express();


app.use(morgan('combined'));

app.use(express.json());
app.use(routes);


app.get('/', (req, res) => {
    res.send("Hello Worlds")
});

module.exports = app;