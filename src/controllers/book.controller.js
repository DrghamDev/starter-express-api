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

exports.create = async (req, res) => {
    try {
        const book = await Book.create({
            title : "Game of thrones",
            body : "A description for game of thrones book",
        })
        return res.status(201).json({
            success : true,
            data : book,
            message : "Book has created successfully",
        })
    } catch (error) {
        return res.status(501).json({
            success : false,
            data : [],
            message : "Something went wrong",
        })
    }
}