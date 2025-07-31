const express = require('express')
const router = express.Router()
const controller = require('../controllers/reviewController')

// GET reviews by movie ID
router.get('/:movieId', controller.getByMovieId)

// POST new review
router.post('/', controller.create)

module.exports = router
