const express = require('express');
const { index, create } = require('../controllers/book.controller');

const bookRouter = express.Router();
bookRouter.get('/', index);
bookRouter.post('/', create)

module.exports = bookRouter;