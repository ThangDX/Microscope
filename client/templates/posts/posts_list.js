/**
 * Created by thangdx on 28/12/2014.
 */

Template.postsList.helpers({
    posts: function() {
        return Posts.find({}, {sort: {submitted: -1}});
    }
});