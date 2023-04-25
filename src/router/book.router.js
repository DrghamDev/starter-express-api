const express = require('express');
const { index } = require('../controllers/book.controller');

const bookRouter = express.Router();
bookRouter.get('/', index);

module.exports = bookRouter;