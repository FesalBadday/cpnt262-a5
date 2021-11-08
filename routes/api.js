/******************/
/* Import Modules */
/******************/
const express = require('express') // import express module
const router = express.Router()

const Gallery = require('../models/gallery') // import gallery module
const localGallery = require('../models/seeds/gallery') // import gallery module
const randomCar = require('./random-car') // import random-car module

/**********/
/* Routes */
/**********/
router.get('/cars', async (req, res) => {
  try {
    // find all cars
    let data = await Gallery.find()

    // check if mongoose model is inoperable or non-existent
    if (data.length === 0) {
      data = localGallery // get local module
    }

    // check if filter = random
    if (req.query.filter === 'random') {
      res.send(randomCar(data)) // show the random car
    } else { // else
      res.send(data) // else show everything in the array
    }

  } catch (err) {
    console.log(err) // console log the error
    res.send({ error: 'Gallery Not Found' }) // send JSON 404 error
  }
})

router.get('/cars/:id', async (req, res) => {
  try {
    // find 1 car only based on id
    let data = await Gallery.findOne({ id: req.params.id })

    // check if mongoose model is inoperable or non-existent
    if (!data) {
      data = localGallery.find(car => Number(req.params.id) === car.id) // get local module
    }

    if (data) { // check if mongoose data existest
      res.send(data) // show the car
    } else { // else
      res.send({ error: 'Car Not Found' }) // send JSON 404 error
    }

  } catch (err) {
    console.log(err) // console log the error
    res.send({ error: '404 Not Found' }) // send JSON 404 error
  }
})

module.exports = router // export router