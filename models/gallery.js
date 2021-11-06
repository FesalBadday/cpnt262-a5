const mongoose = require('mongoose') // import mongoose module

// gallery schema
const gallerySchema = new mongoose.Schema({
  id: Number,
  title: String,
  description: String,
  image: Object,
  pathURL: String,
  jpg: String,
  linkURL: String,
  credit: String,
  creditURL: String,
  dateCreated: String
})

module.exports = mongoose.model('gallery', gallerySchema)