// Install modules
const express = require('express') // import express module
const app = express()

const gallery = require('./data/gallery') // import gallery module
const api = require('./routes/api') // import api module

//
app.use('/api/cars', api);

// Handle 404 errors with middleware
app.use((req, res) => {

  // If path starts with `/api`, send JSON 404
  if (req.url.startsWith('/api')) {
    res.status(404)
    res.send({ error: '404 Not Found' })
  } else {
    // else send HTML 404
    res.status(404)
    res.redirect('/public/404.html')
  }
});

// Start server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});