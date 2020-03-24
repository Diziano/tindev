const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

const server = express();

/* replace with your connection string */
mongoose.connect('mongodb+srv://username:password@host:port/database?options...', {
    useNewUrlParser: true, 
    useUnifiedTopology: true
});

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3333);