exports.credit = function(account, amount){
    if(!account.frozen)
        account.balance += amount;
}