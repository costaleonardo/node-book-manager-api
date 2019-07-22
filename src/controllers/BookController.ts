import * as mongoose from 'mongoose'
import { Request, Response } from 'express'

/**
 * @TODO 
 * 
 * Update book file name to BookModel
 */
import { BookSchema } from '../models/Book';

const Book = mongoose.model('Book', BookSchema)

export default class BookController {
  public getBooks (req: Request, res: Response) {

    res.status(200).send({
      message: 'GET /books endpoint'
    })
  }

  public addBook (req: Request, res: Response) {

    const newBook = Book(req.body)

    newBook.save((err, book) => {
      if (err) res.send(err)

      res.status(200).send({ book })
    })
  }

  public getBookById (req: Request, res: Response) {

    res.status(200).send({
      message: 'GET /books/:bookId endpoint.'
    })
  }

  public updateBook (req: Request, res: Response) {

    res.status(200).send({
      message: 'PUT /books/:bookId endpoint.'
    })
  }

  public deleteBook (req: Request, res: Response) {

    res.status(200).send({
      message: 'DELETE /books/:bookId endpoint.'
    })
  }
}
