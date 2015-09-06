exports.getAccountById = function(id, next) {
    try {
        // Not implemented!
        
        //var account = db.Find(id);
        //next(null,account);
        throw(new Error("Repository not implemented!"));
    }
    catch(err){
        next(err);
    }
}