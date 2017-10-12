const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipeController');

router.get('/', (req, res) => {
  res.render('layout');
});

router.get('/recipes', recipeController.getAllRecipes);
router.get('/recipes/:id', recipeController.getRandomRecipe);

module.exports = router;
