const createHttpError = require('http-errors');
const Follow = require('./models/follow.model');
const Notification = require('./models/notification.model')
const Book = require('./models/book.model')

async function createNotification(book, chapter) {
  try {
    const followers = await Follow.find({ book: book._id })
      .populate({
        path: 'book',
      }).exec();
    const message = `${book.bookName} has a new chapter: ${chapter.chapterNumber} - ${chapter.title}.`
    const notifcations = followers.map(item => {
      return {
        book: book._id,
        user: item.user,
        message,
      }
    });
    await Notification.create(notifcations);
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function getNotifications(req, res, next) {
  try {
    console.log('afsafsfafsa');
    const notifications = await Notification.find({user: req.params.userId})
      .populate({
        path: 'book',
        select: 'bookName coverImageURL'
      }).exec();
      console.log(notifications);
    return res.json(notifications);
  } catch (error) {
    next(error);
  }
}

async function readAllNotifications(req, res, next) {
  try {
    await Notification.update({ user: req.params.userId }, { "$set": { "isSeen": true } });
    return res.status(200).json({
      message: "You have seen all notifications."
    });
  } catch (error) {
    next(error);
  }
}

async function readNotification(req, res, next) {
  try {
    const notification = await Notification.findById(req.body.notificationId);
    if (req.params.userId !== notification.user.toString()) {
      return next(createHttpError(403))
    }
    notification.isSeen = true;
    await notification.save()
    return res.status(200).json({
      message: "You have seen this notification."
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  readAllNotifications,
  createNotification,
  readNotification,
  getNotifications,
}
