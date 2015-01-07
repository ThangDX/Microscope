/**
 * Created by KPMS on 05/01/15.
 */
Template.errors.helpers({
    errors: function() {
        return Errors.find();
    }
});

Template.error.rendered=function() {
  var error = this.data;
    Meteor.setTimeout(function() {
        Errors.remove(error._id);
    }, 3000)
};