const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyPaser = require('body-parser');
const authRouter = require('./routes/auth.route');
const mongoose = require('mongoose')
// const bookRouter = require('./routes/book.route');
const uploadImageRouter = require('./routes/upload_image.route');
// const categoryRouter = require('./routes/category.route');
const userRouter = require('./routes/user.route');
// const followRouter = require('./routes/follow.route');
// const notificationRouter = require('./routes/notification.route');

app.use(morgan('dev'));
app.use(bodyPaser.json({ extended: false }));
mongoose.connect(process.env.MONGO_URI, (error) => {
  if (error) {
    console.log(error)
  }
  else {
    console.log("Connected to db!");
  }
});

app.use('/api/auth', authRouter);
// app.use('/api/books', bookRouter);
app.use('/api', uploadImageRouter);
// app.use('/api/categories', categoryRouter);
app.use('/api/users', userRouter);
// app.use('/api', followRouter);
// app.use('/api/notifications', notificationRouter);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`User services run at localhost:${PORT}`);
});
