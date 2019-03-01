const request = require('request');
const cheerio = require('cheerio');

module.exports = app => {
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
          sourceUrl: URL,
        });
      } else {
        console.log(error);
        res.status(500).send('Something is wrong...');
      }
    });
  });
};
