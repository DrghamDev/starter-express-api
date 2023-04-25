const express = require('express');
const bookRouter = require('./book.router');

const MainRouter = express.Router();

MainRouter.use('/books', bookRouter);

module.exports = MainRouter;