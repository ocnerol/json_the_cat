const { fetchBreedDescription } = require("./breedFetcher");
const arg = process.argv.splice(2);


fetchBreedDescription(arg, (error, desc) => {
  if (error) {
    console.log('Error fetch details: ', error);
    return;
  } else {
    console.log(desc);
    return;
  }
});