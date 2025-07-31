const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController');

// GET all movies
router.get('/', movieController.getMovies);

// POST create a movie
router.post('/', movieController.createMovie);

// PUT update a movie
router.put('/:id', movieController.updateMovie);

// DELETE remove a movie
router.delete('/:id', movieController.deleteMovie);

module.exports = router;
