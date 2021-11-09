/***********************/
/* Connect to Database */
/***********************/
const mongoose = require('mongoose') // import mongoose module

// make the connection
mongoose.connect(
  process.env.MONGODB_URL,
  { useUnifiedTopology: true, useNewUrlParser: true },
)
  .then(function () { // check if connection is made
    console.log('Connected to DB...')
  })
  .catch(function (err) { // catch errors
    console.log(err)
  });

module.exports = mongoose // export mongoose