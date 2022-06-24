const express = require('express');
const app = express();
const logger = require('morgan');
const mongoose = require('mongoose');
const bookRouter = require('./routes/book.route');
mongoose.connect(process.env.MONGO_URI, (error) => {
  if (error) {
    console.log(error)
  }
  else {
    console.log("Connected to db!");
  }
});

app.use(express.json({ extended: false }));
app.use(logger('dev'))
app.use('/books', bookRouter);
app.get('/health_check', (req, res, next) => {
  res.json({
    message: 'OK'
  })
});

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Book services run at localhost:${PORT}`);
});
