/**
 * Created by KPMS on 12/01/15.
 */
Template.notifications.helpers({
    notifications: function(){
        return Notifications.find({userId: Meteor.userId(), read: false});
    },
    notificationCount: function() {
        return Notifications.find({userId: Meteor.userId(), read: false}).count();
    }
});

Template.notificationItem.helpers({
    notificationPostPath: function() {
        return Router.routers.postPage.path({_id: this.postId});
    }
});

Template.notificationItem.events({
    'click a': function() {
        Notifications.update(this._id, {$set: {read: true}});
    }
});