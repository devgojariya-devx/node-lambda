const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello hi ggod, world!');
});

module.exports = app;  // Export app without starting server
