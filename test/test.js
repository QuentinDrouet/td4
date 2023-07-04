const assert = require('chai').assert;
const getRandomNumber = require('../index');

describe('getRandomNumber', function() {
    it('should return a number', function() {
        let result = getRandomNumber();
        assert.typeOf(result, 'number');
    });
});
