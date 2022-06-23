const express = require('express');
const app = express();

app.use(express.json({ extended: false }));
app.get('/books', (req, res, next) => {
  res.json({
    message: 'Hello Book Service'
  })
});

app.get('/health_check', (req, res, next) => {
  res.json({
    message: 'OK'
  })
});

app.listen(3001, () => {
  console.log('Book services run at localhost:3001');
});
