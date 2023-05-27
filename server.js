const express = require('express');
const app = express();
const router = require('./routes/booksRouter')

port = 3000;

app.use('/api/mybooks/user/allbooks', require('./routes/booksRouter'));

// app.use('/:id', router);

app.post('/api/mybooks/user/books/edit', (req, res) => {
    res.status(201).json({message: 'Book added successfully'});
});

app.put('/api/mybooks/user/books/edit/:id', (req, res) => {
    res.status(200).json({message: 'Book ' + req.params.id + 'updated successfully'});
});

app.delete('/api/mybooks/user/books/edit/:id', (req, res) => {
    res.status(200).json({message: 'Book ' + req.params.id + 'deleted successfully'});
});

app.listen(port, () => {
    console.log(`Hello, server is running on port ${port}`);
});