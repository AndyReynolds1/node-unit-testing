var expect = require("chai").expect;
var should = require("chai").should;
var AccountManager = require("../../accountRepository/accountManager");
var Account = require("../../accountRepository/account");

describe("AccountRepository", function(){
    describe("Credit", function(){
        it("Increases balance correctly", function(done){
            
            // Arrange
            var mockAccountRepository = { 
                getAccountById: function(id, next){
                    // Include callback in response
                    next(null, new Account(12345, 150.00, false));
                }
            }
            
            // Act
            var accountManager = new AccountManager(mockAccountRepository);
            
            accountManager.credit(12345, 17.50, function(err, account){

                // Assert
                if(err)
                    return done(err)
                
                expect(account.balance).to.equal(167.50);
                expect(err).to.not.exist;
                
                done();
            });
            
        });
        
        it("Don't credit frozen account", function(done){
            
            // Arrange
            var mockAccountRepository = { 
                getAccountById: function(id, next){
                    // Include callback in response
                    next(null, new Account(12345, 150.00, true));
                }
            }
            
            // Act
            var accountManager = new AccountManager(mockAccountRepository);
            
            accountManager.credit(12345, 25.00, function(err, account){

                // Assert
                expect(err.toString()).to.equal("Account frozen");
                expect(account).to.not.exist;
                
                done();
            });
            
        });
        
        
    });
});