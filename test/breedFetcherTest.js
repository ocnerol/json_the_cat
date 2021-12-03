
const { assert } = require('chai');
const { fetchBreedDescription } = require('../breedFetcher');



describe('fetchBreedDescription', () => {

  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      assert.equal(desc.trim(), expectedDesc);

      done();
    });
  });

  it('returns an error when an invalid/non-existent breed is given, via callback', (done) => {
    fetchBreedDescription('inValidBreed', (err, desc) => {

      const expectedError = 'The requested breed could not be found. Please ensure you have entered the breed name correctly.';
      // we expect an error for this scenario
      assert.equal(err, expectedError);

      // we expect null for the given desc
      assert.equal(desc, null);

      done();
    });
  });


});