/**
 * Created by KPMS on 05/01/15.
 */
Errors = new Mongo.Collection(null);

throwError = function (message) {
    Errors.insert({message: message});
};