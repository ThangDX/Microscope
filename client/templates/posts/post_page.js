/**
 * Created by KPMS on 09/01/15.
 */
Template.postPage.helpers({
    comments: function() {
        return Comments.find({postId: this._id});
    }
});