document.addEventListener('DOMContentLoaded', function() {

describe('Populate up to the first 5 elements from the Fruits array that have a substring that match the text inputted into the search bar', function () {
    beforeEach(function () {
      results = [];
      input.target.value = 'ap';
    });
  
    it('should populate the "results" array with just the first 5 elements', function () {
      searchHandler(input);
      expect(results.length).toEqual(5);
      expect(results[0]).toEqual('Apple');
      expect(results[1]).toEqual('Apricot');
      expect(results[2]).toEqual('Custard apple');
      expect(results[3]).toEqual('Grape');
      expect(results[4]).toEqual('Grapefruit');
    });
  });
})