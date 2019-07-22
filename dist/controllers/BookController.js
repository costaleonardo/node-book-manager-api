"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
/**
 * @TODO
 *
 * Update book file name to BookModel
 */
const Book_1 = require("../models/Book");
const Book = mongoose.model('Book', Book_1.BookSchema);
class BookController {
    getBooks(req, res) {
        res.status(200).send({
            message: 'GET /books endpoint'
        });
    }
    addBook(req, res) {
        const newBook = Book(req.body);
        newBook.save((err, book) => {
            if (err)
                res.send(err);
            res.status(200).send({ book });
        });
    }
    getBookById(req, res) {
        res.status(200).send({
            message: 'GET /books/:bookId endpoint.'
        });
    }
    updateBook(req, res) {
        res.status(200).send({
            message: 'PUT /books/:bookId endpoint.'
        });
    }
    deleteBook(req, res) {
        res.status(200).send({
            message: 'DELETE /books/:bookId endpoint.'
        });
    }
}
exports.default = BookController;
//# sourceMappingURL=BookController.js.map