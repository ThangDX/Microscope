/**
 * Created by KPMS on 31/12/14.
 */
Template.postItem.helpers({
    ownPost: function() {
      return this.userId === Meteor.userId();
    },
    domain: function() {
        var a = document.createElement('a');
        a.href = this.url;
        return a.hostname;
    }
});

Template.postItem.events({
    'click .upvote': function(e) {
        e.preventDefault();
        Meteor.call ('upvote', this._id);
    }
});