require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// need some refactor
const authorRoutes = require('./routes/author.js');
const bookRoutes = require('./routes/book.js');
const authRoutes = require('./routes/auth.js');
const userRoutes = require('./routes/user.js');

app.use("/authors", authorRoutes);
app.use("/books", bookRoutes);
app.use("/auth", authRoutes);
app.use("/users", userRoutes);

module.exports = app
