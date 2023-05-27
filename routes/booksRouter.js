const express = require('express');
const booksRoute= express.Router();
const {getAllBooks} = require('../controllers/booksController');

// booksRoute.get('/api/mybooks/user/allbooks', (req, res) => {
//     res.status(200).json({message: 'All books are available'});
// });

booksRoute.route('/').get(getAllBooks);

// booksRoute.get('/api/mybooks/user/books/:id', (req, res) => {
//     res.status(200).json({message: 'Book with id ' + req.params.id});
// });

module.exports = booksRoute;