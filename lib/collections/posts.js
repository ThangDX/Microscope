/**
 * Created by KPMS on 31/12/14.
 */
Posts = new Mongo.Collection('posts');

Posts.allow({
    insert: function(userId, doc){
        return !! userId;
    }
});
