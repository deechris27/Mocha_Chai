const assert = require('chai').assert;
//const app = require('../app');
const sayHello = require('../app').sayHello;
const addNumbers = require('../app').addNumbers;

describe('App', function(){
    
    it('should return a hello', function(){
        let result = sayHello();
        assert.equal(result, 'Hello');
    });

    it('return a type string', function(){
        let result = sayHello();
        assert.typeOf(result, 'string');
    });

    it('return above 6', function(){
       let result = addNumbers(5,5);
       assert.isAbove(result, 6);
    });

    it('addNumbers returns a type number', function(){
        let result = addNumbers(5,5);
         assert.isAtLeast(result, 6);
    });
});