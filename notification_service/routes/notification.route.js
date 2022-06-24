const express = require('express');
const router = express.Router();
const { 
  getNotifications,
  readAllNotifications,
  readNotification,
  createNotifications,
} = require('../controllers/notification.controller');
const authMiddleware = require('../middlewares/auth.middleware');

router.get('/api/notifications/', authMiddleware.verifyToken, getNotifications)
  .put('/api/notifications/read-all', authMiddleware.verifyToken, readAllNotifications)
  .put('/api/notifications/read', authMiddleware.verifyToken, readNotification)
  .post('/notifications', createNotifications);

module.exports = router;
