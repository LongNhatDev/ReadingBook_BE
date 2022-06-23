const express = require('express');
const router = express.Router();
const { 
  getNotifications,
  readAllNotifications,
  readNotification,
} = require('./notification.controller');

router.get('/:userId',  getNotifications)
  .put('/:userId/read-all', readAllNotifications)
  .put('/:userId/read', readNotification);

module.exports = router;
