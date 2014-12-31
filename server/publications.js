/**
 * Created by KPMS on 31/12/14.
 */
Meteor.publish('posts', function() {
    return Posts.find();
});