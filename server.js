// Import modules
const express = require('express') // import express module
const app = express()

const api = require('./routes/api') // import api module

// Serve static files using middleware
app.use(express.static('./public'))

//
app.use('/api', api);

// Handle 404 errors with middleware
app.use((req, res) => {
  try {
    // If path starts with `/api`, send JSON 404
    if (req.url.startsWith('/api')) {
      res.status(404).send({ error: '404 Not Found' })
    } else {
      // else send HTML 404
      res.status(404).redirect('/404.html')
    }
  } catch {
    res.status(404).send({ error: '404 Not Found' })
  }
});

// Start server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});