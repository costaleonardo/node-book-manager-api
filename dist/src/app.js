"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Book_1 = require("../routes/Book");
class App {
    constructor() {
        this.routePrv = new Book_1.BookRoutes();
        this.mongoUrl = 'mongodb://127.0.0.1:27017/books';
        this.app = express();
        this.config();
        this.routePrv.routes(this.app);
        this.mongoSetup();
    }
    config() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
    mongoSetup() {
        mongoose.Promise = global.Promise;
        mongoose.connect(this.mongoUrl, { useNewUrlParser: true }, () => console.log('Successfully connected to MonoDB database.'));
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map