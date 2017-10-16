const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipeController');

router.get('/', recipeController.homePage);

router.get('/recipes', recipeController.getAllRecipes);
router.get('/recipes/random', recipeController.getRandomRecipe);

module.exports = router;
