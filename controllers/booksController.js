//@description Get all books from db
//@route /api/mybooks/user/allbooks
//@method GET
//@public access

getAllBooks = (req, res) => {
    res.status(200).json({message: 'All books are available'});
};

getBookById = (req, res) => {
    res.status(200).json({message: 'Book with id ' + req.params.id});
};

module.exports = {getAllBooks, getBookById};