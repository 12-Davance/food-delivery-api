const express = require('express');
const cors = require('cors');
const morgan = require('cors');


const app = express();

app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use(morgan('combined'));

app.use(express.json());

module.exports = app;