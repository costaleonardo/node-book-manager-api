import { Request, Response } from 'express'

import BookController from '../controllers/BookController';

export class BookRoutes {
  public bookController: BookController = new BookController()
  
  public routes (app): void {
    app.route('/').get((req: Request, res: Response) => {
      res.status(200).send({
        message: 'Manage your book database via this API.'
      })
    })

    app
      .route('/books')
      .get(this.bookController.getBooks)
      .post(this.bookController.addBook)

    app
      .route('/books/:bookId')
      .get(this.bookController.getBookById)
      .put(this.bookController.updateBook)
      .delete(this.bookController.deleteBook)
  }
}