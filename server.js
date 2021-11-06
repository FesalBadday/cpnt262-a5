// Import modules
const express = require('express') // import express module
const app = express()

const mongoose = require('./connection') // import connection module
const api = require('./routes/api') // import api module

// Serve static files using middleware
app.use(express.static('./public'))

// middleware api
app.use('/api', api)

/****************************/
/* Handle 404, start server */
/****************************/

// Handle 404 errors with middleware
app.use((req, res) => {
  try {
    // If path starts with `/api`, send JSON 404
    if (req.url.startsWith('/api')) {
      res.status(404).send({ error: '404 Not Found' }) // send JSON 404 error
    } else {
      // else send HTML 404
      res.status(404).redirect('/404.html') // redirect to 404.html page
    }
  } catch {
    res.status(404).send({ error: '404 Not Found' }) // send JSON 404 error
  }
});

// Start server
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})