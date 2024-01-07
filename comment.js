// create a server with express
const express = require('express');
const app = express();
// connect to mongodb
const mongoose = require('mongoose');
const { MONGOURI } = require('./keys');
mongoose.connect(MONGOURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.connection.on('connected', () => {
    console.log('connected to mongodb');
});
mongoose.connection.on('error', (err) => {
    console.log('error connecting', err);
});
// register models
require('./models/user');
require('./models/post');
// use body parser for parsing json data
app.use(express.json());
// use routes
app.use(require('./routes/auth'));
app.use(require('./routes/post'));
app.use(require('./routes/user'));
// config port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('server is running on', PORT);
});