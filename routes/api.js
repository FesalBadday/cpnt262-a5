/******************/
/* Import Modules */
/******************/
const express = require('express') // import express module
const router = express.Router();

const mongoose = require('../connection')

const randomCar = require('./random-car') // import random-car module

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


const Gallery = mongoose.model('gallery', gallerySchema)

router.get('/cars', (req, res) => {
  Gallery.find((err, data) => {
    try {
      if (typeof data !== 'undefined' && Array.isArray(data)) {
        if (req.query.filter === 'random') {
          res.send(randomCar(data))
        } else {
          res.send(data)
        }
      } else {
        res.status(404).send({ error: '404 Not Found' })
      }
    } catch (err) {
      console.log(err)
      res.status(404).send({ error: '404 Not Found' })
    }
  });
})

router.get('/cars/:id', (req, res) => {
  Gallery.findOne({ id: req.params.id }, (err, data) => {
    try {
      if (typeof data === 'object' && data !== null) {
        res.send(data)
      } else {
        res.status(404).send({ error: '404 Not Found' })
      }
    } catch (err) {
      console.log(err)
      res.status(404).send({ error: '404 Not Found' })
    }
  });
})

module.exports = router; // export router