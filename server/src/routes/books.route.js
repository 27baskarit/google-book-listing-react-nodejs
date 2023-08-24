const express = require('express');
const booksController = require('../controllers/books.controller');

const router = express.Router();

router
  .route('/books')
  .get(booksController.getBooks);

router
  .route('/book/:bookId')
  .get(booksController.getBook);
 

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Books
 *   description: Fetch Books Data
 */

/**
 * @swagger
 * /api/books:
 *
 *   get:
 *     summary: Get all books
 *     description: get all books using google api's.
 *     tags: [Books]
 *     parameters:
 *       - in: query
 *         name: q
 *         schema:
 *           type: string
 *         description: search string
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 results:
 *                   type: array
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 * 
 *
 */

/**
 * @swagger
 * /api/books/{bookId}:
 *   get:
 *     summary: Get book detail
 *     description: Get book detail from google api
 *     tags: [Books]
 *     parameters:
 *       - in: path
 *         name: bookId
 *         required: true
 *         schema:
 *           type: string
 *         description: Book id
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 */
