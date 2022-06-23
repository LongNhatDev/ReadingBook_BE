const express = require('express');
const app = express();
const route = require('./notification.route');
const morgan = require('morgan');
const mongoose = require('mongoose');
require('dotenv').config();
mongoose.connect(process.env.MONGO_URI, (error) => {
  if (error) {
    console.log(error)
  }
  else {
    console.log("Connected to db!");
  }
});

app.use(express.json({ extended: false }));
app.use(morgan('dev'))
app.use('/notifications', route);

app.get('/health_check', (req, res, next) => {
  res.json({
    message: 'OK'
  })
});

app.listen(3002, () => {
  console.log('Notification services run at localhost:3002');
});
