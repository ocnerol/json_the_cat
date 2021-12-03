const request = require('request');

const arg = process.argv.splice(2);
request(`https://api.thecatapi.com/v1/breeds/search?q=${arg}`, (error, response, body) => {
  if (error) {
    console.log(error);
    return;
  }

  const data = JSON.parse(body);

  if (Object.keys(data).length === 0)  {
    console.log('The requested breed could not be found. Please ensure you have entered the breed name correctly.');
    return;
  }
  console.log(data[0].description);

});