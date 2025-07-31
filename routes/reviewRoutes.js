const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');

/**
 * @swagger
 * /api/reviews/{movieId}:
 *   get:
 *     summary: Get all reviews for a movie
 *     parameters:
 *       - in: path
 *         name: movieId
 *         required: true
 *     responses:
 *       200:
 *         description: Returns an array of reviews
 */
router.get('/:movieId', reviewController.getReviews);

/**
 * @swagger
 * /api/reviews:
 *   post:
 *     summary: Create a new review
 *     responses:
 *       201:
 *         description: Review created successfully
 *       400:
 *         description: Validation error
 */
router.post('/', reviewController.createReview);

/**
 * @swagger
 * /api/reviews/{id}:
 *   put:
 *     summary: Update a review by ID
 *     responses:
 *       200:
 *         description: Review updated
 *       400:
 *         description: Validation error
 *       404:
 *         description: Review not found
 */
router.put('/:id', reviewController.updateReview);

/**
 * @swagger
 * /api/reviews/{id}:
 *   delete:
 *     summary: Delete a review by ID
 *     responses:
 *       200:
 *         description: Review deleted successfully
 *       404:
 *         description: Review not found
 */
router.delete('/:id', reviewController.deleteReview);

module.exports = router;
