var expect = require("chai").expect;
var maths = require("../../maths/maths");

describe("Maths", function(){
    describe("Add", function(){
        it("Correctly adds numbers", function(){
            var result = maths.add(1,1);

            expect(result).result.equal(2);
        })
    })
});