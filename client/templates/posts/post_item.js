/**
 * Created by KPMS on 31/12/14.
 */

var POST_HEIGHT = 80;
var Positions = new Mongo.Collection(null);


Template.postItem.helpers({
    ownPost: function() {
      return this.userId === Meteor.userId();
    },
    domain: function() {
        var a = document.createElement('a');
        a.href = this.url;
        return a.hostname;
    },
    upvotedClass: function() {
        var userId = Meteor.userId();
        if(userId && !_.include(this.upvoters, userId)) {
            return 'btn-primary upvotable';
        } else {
            return 'disabled';
        }
    },
    attributes: function() {
        var post = _.extend({}, Positions.findOptions({postId: this._id}), this);
        var newPosition = post._rank * POST_HEIGHT;
        var attributes = {};

        if(!_.isUnderfined(post.position)) {
            attributes.class = 'post invisible';
        } else {
            var delta = post.position - newPosition;
            attributes.style = "top: " + delta + "px";
            if(delta === 0)
                attributes.class = "post animate"
        }

        Meteor.setTimeout(function() {
            Positions.upsert({postId: post._id}, {$set: {position: newPosition}})
        });

        return attributes;
    }
});

Template.postItem.events({
    'click .upvotable': function(e) {
        e.preventDefault();
        Meteor.call ('upvote', this._id);
    }
});