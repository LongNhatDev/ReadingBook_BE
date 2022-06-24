const express = require('express');
const app = express();
const logger = require('morgan');
const mongoose = require('mongoose');
const bookRouter = require('./routes/book.route');
const uploadImageRouter = require('./routes/upload_image.route');
const categoryRouter = require('./routes/category.route');
const followRouter = require('./routes/follow.route');

mongoose.connect(process.env.MONGO_URI, (error) => {
  if (error) {
    console.log(error)
  }
  else {
    console.log("Connected to db!");
  }
});
const bodyParser = require('body-parser')

app.use(bodyParser.json({ extended: false }));
app.use(logger('dev'))
app.use('/api/books', bookRouter);
app.use('/api', uploadImageRouter);
app.use('/api/categories', categoryRouter);
app.use('/api', followRouter);

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Book services run at localhost:${PORT}`);
});
