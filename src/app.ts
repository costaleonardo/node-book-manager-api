import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as mongoose from 'mongoose'
class App {
  public app: express.Application
  // public routePrv: Routes = new Routes()
  public mongoUrl: string = 'mongodb://127.0.0.1:27017/books'

  constructor () {
    this.app = express()
    this.config()
    // this.routePrv.routes(this.app)
    this.mongoSetup()
  }

  private config (): void { 
    this.app.use(bodyParser.json())
    this.app.use(bodyParser.urlencoded({ extended: false }))
  }

  private mongoSetup (): void {
    mongoose.Promise = global.Promise
    mongoose.connect(this.mongoUrl, { useNewUrlParser: true }, () => console.log('Successfully connected to MonoDB database.'))
  }
}

export default new App().app