"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
exports.BookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    thumbnail_url: {
        type: String,
        required: true
    },
    summary: {
        type: String,
        require: true
    },
    added_date: {
        type: Date,
        default: Date.now
    }
});
//# sourceMappingURL=Book.js.map