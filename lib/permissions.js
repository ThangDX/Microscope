/**
 * Created by thangdx on 03/01/2015.
 */
ownsDocument = function(userId, doc) {
    return doc && doc.userId === userId;
}