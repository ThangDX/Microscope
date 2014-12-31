/**
 * Created by KPMS on 31/12/14.
 */

Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    waitOn: function() {return Meteor.subscribe('posts');}
});
Router.route('/', {name: 'postsList'});