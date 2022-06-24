const express = require('express');
const router = express.Router();
const { getAllUsers,getUserById, createStaffAccount, updateUserById, updateUserProfile, getUserProfile, updatePassword } = require('../controllers/user.controller');
const {verifyToken, isAdmin, isMod} = require('../middlewares/auth.middleware');
// const { getFollowedBooks } = require('../controllers/book.controller')

router
  .get('/', verifyToken, isAdmin, getAllUsers)
  .post('/', verifyToken, isAdmin, createStaffAccount)
  .get('/:userId', verifyToken, isAdmin, getUserById)
  .patch('/:userId',verifyToken, isAdmin, updateUserById)
  .get('/profile', verifyToken, getUserProfile)
  .put('/profile', verifyToken, updateUserProfile)
  .put('/change-password', verifyToken, updatePassword)
  // .get('/user/followed-books', verifyToken, getFollowedBooks) ///sao lai co cai nay nhu


module.exports = router;
