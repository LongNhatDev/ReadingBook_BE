const express = require('express');
const router = express.Router();
const {
  followBook,
  unfollowBook
} = require('../controllers/follow.controller');
const authMiddleware = require('../middlewares/auth.middleware');

const { getFollowedBooks } = require('../controllers/book.controller');

router.post('/follow', authMiddleware.verifyToken, followBook)
  .delete('/unfollow/book/:bookId', authMiddleware.verifyToken, unfollowBook)
  .get('/followed-books', authMiddleware.verifyToken, getFollowedBooks) 

module.exports = router;
