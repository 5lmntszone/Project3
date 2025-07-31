const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');

// GET all reviews for a movie
router.get('/:movieId', reviewController.getReviews);

// POST create a new review
router.post('/', reviewController.createReview);

// PUT update a review
router.put('/:id', reviewController.updateReview);

// DELETE remove a review
router.delete('/:id', reviewController.deleteReview);

module.exports = router;
