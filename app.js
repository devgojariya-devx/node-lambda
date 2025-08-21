const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello , guys!');
});

module.exports = app;  // Export app without starting server
