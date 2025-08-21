const app = require('./app');
const port = 4000;

app.listen(port, () => {
  console.log(`Server running locally on port ${port}`);
});
