const express = require('express') // import express module
const router = express.Router();

const gallery = require('../data/gallery') // import gallery module
const randomCar = require('./random-car') // import random-car module

// Dynamic JSON Endpoint
router.get('/', (req, res) => {
  try {
    if (typeof gallery !== 'undefined' && Array.isArray(gallery)) {
      // Variable is an array!
      if (req.query.filter === 'random') {
        res.send(randomCar(gallery))
      } else {
        res.send(gallery)
      }

    } else {
      res.status(404).send({ error: '404 Not Found' })
    }
  } catch {
    res.status(404).send({ error: '404 Not Found' })
  }
})

router.get('/:id', (req, res) => {
  try {
    if (typeof gallery !== 'undefined' && Array.isArray(gallery)) {
      const foundCar = gallery.find(car => Number(req.params.id) === car.id);

      if (!foundCar) { // send 404 if car is not found
        res.status(404).send({ error: '404 Not Found' })
      } else { // else show the array
        res.send(foundCar)
      }

    } else {
      res.status(404).send({ error: '404 Not Found' })
    }
  } catch {
    res.status(404).send({ error: '404 Not Found' })
  }
})

module.exports = router;