const express = require('express');
const router = express.Router();
//const recipeController = require('../controllers/recipeController');

router.get('/', (req, res) => {
  res.send('hey it worked');
});

module.exports = router;
