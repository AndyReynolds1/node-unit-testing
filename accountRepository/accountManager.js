var AccountManager = function(repository) {
    this.repository = repository;
}

AccountManager.prototype.credit = function(id, amount, next) {
    try {
        // Load account from repository
        this.repository.getAccountById(id, function(err, account) {

            if (err) {
                next(err);
            }
            else {
                // Check for frozen account
                if (account.frozen)
                {
                    next("Account frozen");
                } else {
                    account.balance += amount;
                    next(null, account); 
                }
            }
        });
    }
    catch (err) {
        next(err);
    }

}

module.exports = AccountManager;
