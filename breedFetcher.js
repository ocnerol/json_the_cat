const request = require('request');


const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      return callback(error, null);
    }

    const data = JSON.parse(body);

    if (data.length === 0) {
      return callback('The requested breed could not be found. Please ensure you have entered the breed name correctly.', null);
    }

    return callback(null, data[0].description);

  });
};



module.exports = { fetchBreedDescription };