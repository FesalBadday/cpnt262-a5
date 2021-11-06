/******************/
/* Import Modules */
/******************/
const express = require('express') // import express module
const router = express.Router()

const Gallery = require('../models/gallery') // import gallery module
const randomCar = require('./random-car') // import random-car module

router.get('/cars', (req, res) => {
  try {
    Gallery.find((err, data) => { // find all cars
      if (typeof data !== 'undefined' && Array.isArray(data)) { // check if data isn't undefined and it's an array
        if (req.query.filter === 'random') { // check if filter = random 
          res.send(randomCar(data)) // show the random car
        } else { // else
          res.send(data) // else show everything in the array
        }
      } else {
        res.status(404).send({ error: '404 Not Found' }) // send JSON 404 error
      }
    })
  } catch (err) {
    console.log(err) // console log the error
    res.status(404).send({ error: '404 Not Found' }) // send JSON 404 error
  }
})

router.get('/cars/:id', (req, res) => {
  try {
    Gallery.findOne({ id: req.params.id }, (err, data) => { // find 1 car only based on id
      if (typeof data === 'object' && data !== null) { // check if data is an object and not empty
        res.send(data) // show the car
      } else { // else
        res.status(404).send({ error: '404 Not Found' }) // send JSON 404 error
      }
    })
  } catch (err) {
    console.log(err) // console log the error
    res.status(404).send({ error: '404 Not Found' }) // send JSON 404 error
  }
})

module.exports = router // export router