const express = require('express');
const request = require('request');
const cheerio = require('cheerio');

const app = express();

app.get('/api/allrecipes/:id', async (req, res) => {
  const { id } = req.params;
  const URL = `https://www.allrecipes.com/recipe/${id}`;

  const getDirections = html => {
    const $ = cheerio.load(html);
    const directions = [];

    $('.recipe-directions__list--item').each(function(i, elem) {
      directions[i] = $(this)
        .text()
        .trim();
    });

    return directions.slice(0, -1);
  };

  const getIngredients = html => {
    const $ = cheerio.load(html);
    const ingredients = [];

    $('.recipe-ingred_txt.added').each(function(i, elem) {
      ingredients[i] = $(this)
        .text()
        .trim();
    });

    return ingredients.slice(0, -2);
  };

  const getName = html => {
    const $ = cheerio.load(html);

    return $('h1').text();
  };

  const getImage = html => {
    const $ = cheerio.load(html);

    return $('.rec-photo').attr('src');
  };

  request(URL, function(error, response, body) {
    if (!error && response.statusCode !== 404) {
      res.send({
        directions: getDirections(body),
        ingredients: getIngredients(body),
        name: getName(body),
        imageUrl: getImage(body),
      });
    } else {
      console.log(error);
      res.status(500).send('Something is wrong...');
    }
  });
});

app.get('/api/delish/:id', async (req, res) => {
  const { id } = req.params;
  const URL = `https://www.delish.com/cooking/recipe-ideas/${id}`;

  const getDirections = html => {
    const $ = cheerio.load(html);
    const directions = [];

    $('.direction-lists')
      .find('li')
      .each(function(i, elem) {
        directions[i] = $(this)
          .text()
          .trim();
      });

    return directions;
  };

  const getIngredients = html => {
    const $ = cheerio.load(html);
    const ingredients = [];

    $('.ingredient-item').each(function(i, elem) {
      ingredients[i] = $(this)
        .text()
        .trim();
    });

    return ingredients;
  };

  const getName = html => {
    const $ = cheerio.load(html);

    return $('h1').text();
  };

  const getImage = html => {
    const $ = cheerio.load(html);

    return $('.zoomable').attr('data-src');
  };

  request(URL, function(error, response, body) {
    if (!error && response.statusCode !== 404) {
      res.send({
        ingredients: getIngredients(body),
        directions: getDirections(body),
        name: getName(body),
        imageUrl: getImage(body),
      });
    } else {
      console.log(error);
      res.status(500).send('Something is wrong...');
    }
  });
});

app.listen(5000, () =>
  console.log('Example app listening on http://localhost:5000')
);
