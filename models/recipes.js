const recipes = [
  {
    name: 'Cinnamon Roll',
    id: 1,
    link: 'https://thestayathomechef.com/best-homemade-cinnamon-rolls-ever/',
    image:
      'https://therecipecritic.com/wp-content/uploads/2016/05/Quick-Cinnamon-Buns-19-of-23.jpg',
  },
  {
    name: 'Chocolate Babka',
    id: 2,
    link:
      'https://www.bingingwithbabish.com/recipes/2017/5/09/babka-inspired-by-seinfeld',
    image:
      'http://cdn-image.foodandwine.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/recipe0116-xl-chocolate-babka.jpg?itok=hR9XTNrZ',
  },
  {
    name: 'Chocolate Chip Muffins',
    id: 3,
    link: 'https://sugarspunrun.com/bakery-style-chocolate-chip-muffins/',
    image:
      'http://sugarspunrun.com/wp-content/uploads/2016/11/bakery-style-chocolate-chip-muffins-1-of-1-2.jpg',
  },
  {
    name: 'Angel Food Cake',
    id: 4,
    link:
      'http://www.foodnetwork.com/recipes/alton-brown/angel-food-cake-recipe-1938726',
    image:
      'https://cdn2.tmbi.com/TOH/Images/Photos/37/1200x1200/Best-Angel-Food-Cake_exps14878_W101973175C10_07_2bC_RMS.jpg',
  },
  {
    name: 'Lemon Macarons',
    id: 5,
    link: 'https://www.sweetandsavorybyshinee.com/lemon-french-macarons/',
    image:
      'https://www.sweetandsavorybyshinee.com/wp-content/uploads/2014/05/Lemon-French-Macarons-1.jpg',
  },
  {
    name: 'Apple Pie',
    id: 6,
    link: 'http://www.kingarthurflour.com/recipes/apple-pie-recipe',
    image:
      'http://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/6/28/0/FNK_Apple-Pie-Lattice_s4x3.jpg.rend.hgtvcom.616.462.suffix/1383692869237.jpeg',
  },
  {
    name: 'Blueberry Scones',
    id: 7,
    link: 'https://www.marthastewart.com/317388/blueberry-scones',
    image:
      'https://www.justataste.com/wp-content/uploads/2016/05/glazed-lemon-blueberry-scones-580x380.jpg',
  },
  {
    name: 'Southern-style Biscuits',
    id: 8,
    link:
      'http://www.foodnetwork.com/recipes/alton-brown/southern-biscuits-recipe-2041990',
    image: 'http://www.copykat.com/wp-content/uploads/2010/11/biscuit.jpg',
  },
  {
    name: 'Classic Chocolate Cake with Chocolate Frosting',
    id: 9,
    link: 'https://addapinch.com/the-best-chocolate-cake-recipe-ever/',
    image: 'https://iambaker.net/wp-content/uploads/2013/11/chocolatecake7.jpg',
  },
  {
    name: 'Chocolate Chip Cookies',
    id: 10,
    link: 'https://sugarspunrun.com/worst-chocolate-chip-cookies/',
    image:
      'https://sugarspunrun.com/wp-content/uploads/2016/03/worst-ever-chocolate-chip-cookies-Sugar-Spun-Run-1-of-1.jpg',
  },
  {
    name: 'Oatmeal Raisin Cookies',
    id: 11,
    link:
      'https://www.livewellbakeoften.com/soft-chewy-oatmeal-raisin-cookies/',
    image:
      'https://i0.wp.com/www.livewellbakeoften.com/wp-content/uploads/2017/01/Soft-and-Chewy-Oatmeal-Raisin-Cookies-3.jpg?w=1360&ssl=1',
  },
  {
    name: 'Snickerdoodle Cookies',
    id: 12,
    link: 'https://www.stuckonsweet.com/snickerdoodle-cookies/',
    image:
      'http://www.seriouseats.com/recipes/assets_c/2016/01/20160121-snickerdoodle-step-by-step-kenji-19-thumb-1500xauto-429385.jpg',
  },
  {
    name: 'Homemade Soft Pretzels',
    id: 13,
    link:
      'http://www.foodnetwork.com/recipes/alton-brown/homemade-soft-pretzels-recipe-1948242',
    image:
      'http://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/11/23/0/FN_pretzels-005_s4x3.jpg.rend.hgtvcom.616.462.suffix/1382540999238.jpeg',
  },
  {
    name: 'Chewy Fudge Brownies',
    id: 14,
    link: 'https://www.handletheheat.com/chewy-brownies/',
    image:
      'http://img.taste.com.au/gOpVgvz8/taste/2016/11/classic-chewy-brownie-102727-1.jpeg',
  },
  {
    name: 'Coffee Cake',
    id: 15,
    link:
      'http://www.kingarthurflour.com/recipes/cinnamon-streusel-coffeecake-recipe',
    image:
      'https://cdn-us-ec.yottaa.net/55b635db0b5344273c002031/d1fd69005c1501336a81123dfe2baf36.yottaa.net/v~13.311/128-2-medium.jpg?yocs=H_&yoloc=us',
  },
  {
    name: 'Blueberry Muffins',
    id: 16,
    link: 'https://www.tasteofhome.com/recipes/blueberry-streusel-muffins',
    image:
      'http://justatastebykellyann.com/wp-content/uploads/2009/01/blueberrybellmuffins2.png',
  },
  {
    name: 'New York Style Cheesecake',
    id: 17,
    link:
      'https://www.epicurious.com/recipes/food/views/original-new-york-cheesecake-51200640',
    image:
      'https://assets.epicurious.com/photos/54ad4cec6529d92b2c043c5b/6:4/w_274%2Ch_169/51200640_new-york-cheesecake_1x1.jpg',
  },
  {
    name: 'Cinnamon Babka',
    id: 18,
    link:
      'https://www.bingingwithbabish.com/recipe/2017/5/09/babka-inspired-by-seinfelchc',
    image:
      'https://www.afamilyfeast.com/wp-content/uploads/2016/03/Cinnamon-Raisin-Swirl-Babka2.jpg',
  },
  {
    name: 'Tiramisu',
    id: 19,
    link: 'https://www.askchefdennis.com/the-best-tiramisu-you-will-ever-make/',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgCicf6LokOigfKkkPkHloesPB6RzaPjlBkq2T7J3KArsFzFQnVw',
  },
  {
    name: 'Pumpkin Scones',
    id: 20,
    link:
      'http://www.kingarthurflour.com/recipes/harvest-pumpkin-scones-recipe',
    image:
      'https://cdn-us-ec.yottaa.net/55b635db0b5344273c002031/d1fd69005c1501336a81123dfe2baf36.yottaa.net/v~13.311/1704-2-medium.jpg?yocs=H_&yoloc=us',
  },
  {
    name: 'French Silk Chocolate Pie',
    id: 21,
    link: 'http://thepioneerwoman.com/cooking/french-silk-pie-step-by-step/',
    image:
      'http://bakerbettie.com/wp-content/uploads/2013/11/french-silk-pie-square.jpg',
  },
  {
    name: 'Cherry Pie',
    id: 22,
    link:
      'http://www.seriouseats.com/2016/06/how-to-make-the-ultimate-cherry-pie.html',
    image:
      'http://www.seriouseats.com/images/2016/06/20160608-cherry-pie-vicky-wasik-1.jpg',
  },
  {
    name: 'Blueberry Pie',
    id: 23,
    link: 'https://www.williams-sonoma.com/recipe/blueberry-pie.html',
    image:
      'https://www.williams-sonoma.com/wsimgs/rk/images/dp/recipe/201707/0025/img54l.jpg',
  },
  {
    name: 'Peach Pie',
    id: 24,
    link: 'http://www.foodandwine.com/recipes/georgia-peach-pie',
    image:
      'https://pintsizedbaker.com/wp-content/uploads/2014/08/Perfect-Peach-Pie-600x600.jpg',
  },
  {
    name: 'Blueberry Cobbler',
    id: 25,
    link:
      'http://www.foodnetwork.com/recipes/ree-drummond/blueberry-cobbler-3800614',
    image:
      'https://spicysouthernkitchen.com/wp-content/uploads/blueberry-cobbler-18.jpg',
  },
  {
    name: 'Peach Cobbler',
    id: 26,
    link: 'http://allrecipes.com/recipe/51535/fresh-southern-peach-cobbler/',
    image: 'https://d2gk7xgygi98cy.cloudfront.net/4969-3-large.jpg',
  },
  {
    name: 'Apple Turnovers',
    id: 27,
    link: 'https://www.browneyedbaker.com/apple-turnovers-from-scratch/',
    image:
      'http://www.ezrapoundcake.com/wp-content/uploads/2008/09/turnover2.jpg',
  },
  {
    name: 'Classic French Cream Puffs',
    id: 28,
    link: 'https://www.marthastewart.com/1113097/classic-cream-puffs',
    image:
      'http://d1p2lndmkj2nyk.cloudfront.net/wp-content/uploads/2012/12/Cream-Puffs-1-3-1024x682.jpg',
  },
  {
    name: 'Old-fashioned Doughnuts',
    id: 29,
    link: 'https://www.handletheheat.com/old-fashioned-sour-cream-doughnuts/',
    image:
      'https://www.handletheheat.com/wp-content/uploads/2014/05/Sour-Cream-Doughnuts-04-Square.jpg',
  },
  {
    name: 'Chocolate Caramel Shortbread Bars',
    id: 30,
    link:
      'https://www.buzzfeed.com/buzzfeedvideo/salted-chocolate-caramel-shortbread-slice?utm_term=.qbEA2RKvlQ#.xk1mJQpE23',
    image:
      'https://s-media-cache-ak0.pinimg.com/originals/a4/ac/d7/a4acd7e76fee66f6b8d19060b1906c13.jpg',
  },
];

module.exports = recipes;
