var expect = require("chai").expect;
var accountManager = require("../../accountManager/accountManager");
var Account = require("../../accountManager/account");

describe("AccountManager", function(){
    describe("Credit", function(){
        it("Increases balance correctly", function(){

            // Arrange
            var account = new Account(12345, 150.00, false);

            // Act
            accountManager.credit(account, 10.00);

            // Assert
            expect(account.balance).to.equal(160.00);
        });

        it("Don't credit account if frozen", function(){

            // Arrange
            var account = new Account(12345, 150.00, true);

            // Act
            accountManager.credit(account, 15.00);

            // Assert
            expect(account.balance).to.equal(150.00);
        })
    })

});