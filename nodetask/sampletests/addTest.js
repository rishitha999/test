var assert = require('chai').assert;
var add =require('../add');
describe('Add',function(){
    it('should add 5 and return 10',function(){
        var result =add(5);
        assert.equal(result,10);//we are expecting  result value as 10
    });
    it('should return type number',function(){
        var result =add(5);
        assert.typeOf(result,'number');//we are checking the type of the result value to be number
    });
    it('should return type string',function(){
        var result = add('a');//it adds and gives 'a5' as a string
        assert.typeOf(result,'string');//we are checking the type of the result value to be  string
    });
     it('should add 15 and return greater than 15 and checks  for actual value is 20',function(){
        var result =add(15);
        assert.isAbove(result,15);//we are expecting  result value as 20 and to check the above func
        assert.equal(result,20);
    });
})