import * as mongoose from 'mongoose'

const Schema = mongoose.Schema

export const BookSchema = new Schema({
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
})