const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');
const ensureAuth = require('../middleware/authMiddleware'); 

/**
 * @swagger
 * /api/reviews/{movieId}:
 *   get:
 *     summary: Get all reviews for a movie
 *     ...
 */
router.get('/:movieId', reviewController.getReviews);

/**
 * @swagger
 * /api/reviews:
 *   post:
 *     summary: Create a new review
 *     ...
 */
router.post('/', ensureAuth, reviewController.createReview); 

/**
 * @swagger
 * /api/reviews/{id}:
 *   put:
 *     summary: Update a review by ID
 *     ...
 */
router.put('/:id', ensureAuth, reviewController.updateReview); 

/**
 * @swagger
 * /api/reviews/{id}:
 *   delete:
 *     summary: Delete a review by ID
 *     ...
 */
router.delete('/:id', ensureAuth, reviewController.deleteReview); 

module.exports = router;
