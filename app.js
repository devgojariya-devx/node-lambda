const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello world hii, guys!');
});

module.exports = app;  // Export app without starting server
