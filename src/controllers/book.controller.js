const Book = require("../models/book.model")

exports.index = async (req, res) => {
    try {
        const books = await Book.find();
        return res.status(200).json({
            success : true,
            data : books,
        })
    } catch (error) {
        return res.status(200).json({
            success : false,
            data : [],
        })
    }
}