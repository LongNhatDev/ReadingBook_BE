const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan('dev'));
app.use(express.json({ extended: false }));
app.get('/users', (req, res, next) => {
  res.json({
    message: 'Hello User'
  })
});

app.get('/health_check', (req, res, next) => {
  res.json({
    message: 'OK'
  })
});

app.listen(3000, () => {
  console.log('User services run at localhost:3000');
});
