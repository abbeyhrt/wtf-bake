const recipes = require('../models/recipes');

exports.homePage = (req, res) => {
  // window.addEventListener('keydown', e => {
  //   if (e.keycode === 13) {
  //     res.redirect('recipe');
  //   }
  // });
  res.render('layout');
};

exports.getAllRecipes = (req, res) => {
  res.send('hello there');
};

exports.getRandomRecipe = (req, res) => {
  function getRandomInt(min, max) {
    // _max = Math.random() * max;

    // MAX === 100
    // [0, 100], all positive integers between
    // [50, 100]
    // Max === 100, min === 50
    return Math.floor(Math.random() * max) + min;
  }

  // math.random(1, 30);

  //figure out how to insert a random recipe using the id
  //something like res.render('recipe', { id: randomNumberGenerator})
  const randomNumber = getRandomInt(1, 30);

  const recipe = recipes[randomNumber];

  res.render('recipe', { recipe });
};
