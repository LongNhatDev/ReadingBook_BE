const express = require('express');
const app = express();
const route = require('./routes/notification.route');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');

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
app.use(morgan('dev'))
app.use(cors())
app.use('/', route);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Notification services run at localhost:${PORT}`);
});
