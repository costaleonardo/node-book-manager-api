"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BookController_1 = require("../controllers/BookController");
class BookRoutes {
    constructor() {
        this.bookController = new BookController_1.default();
    }
    routes(app) {
        app.route('/').get((req, res) => {
            res.status(200).send({
                message: 'Manage your book database via this API.'
            });
        });
        app
            .route('/books')
            .get(this.bookController.getBooks)
            .post(this.bookController.addBook);
        app
            .route('/books/:bookId')
            .get(this.bookController.getBookById)
            .put(this.bookController.updateBook)
            .delete(this.bookController.deleteBook);
    }
}
exports.BookRoutes = BookRoutes;
//# sourceMappingURL=Book.js.map