const express = require('express');
const router = express.Router();
const {
  createBook,
  getBookById,
  updateBook,
  searchBook,
  getAllBooks,
  getBooksInCategory,
  getBookByAuthor,
  deleteBook,
  updateViewNumberBook,
  updateBookStatus,
  acceptBook,
  getAllAcceptedBook,
  getAllUnAcceptedBook
} = require('../controllers/book.controller');

const {
  createNewChapter,
  getDetailChapter,
  getAllChapters,
  updateChapter,
  deleteChapterInBook,
} = require('../controllers/chapter.controller');

const {
  createReviewBook,
  getAllReviewsInBook,
  deleteReviewInBook
} = require('../controllers/review.controller');

const { validateCreateReview } = require('../middlewares/validate.middleware');

router.post('/', createBook)
  .get('/', getAllBooks)
  .get('/category/:categoryId', getBooksInCategory)
  .get('/book/:bookId', getBookById)
  .put('/book/:bookId', updateBook)
  .patch('/book/:bookId/status', updateBookStatus)
  .get('/author', getBookByAuthor)
  .get('/search', searchBook)
  .delete('/book/:bookId', deleteBook)
  .put('/book/:bookId/viewNumber', updateViewNumberBook)
  .patch('/book/:bookId/accept-book', acceptBook)
  .get('/accepted-books', getAllAcceptedBook)
  .get('/unaccepted-books', getAllUnAcceptedBook)

router.post('/:bookId/chapters', createNewChapter) 
  .get('/:bookId/chapters/:chapterNumber', getDetailChapter)
  .put('/:bookId/chapters/:chapterId', updateChapter)
  .get('/:bookId/chapters', getAllChapters)
  .delete('/:bookId/chapters/:chapterId', deleteChapterInBook);

router.post('/:bookId/reviews', validateCreateReview, createReviewBook)
  .get('/:bookId/reviews', getAllReviewsInBook)
  .delete('/:bookId/reviews/:reviewId', deleteReviewInBook);

module.exports = router;
