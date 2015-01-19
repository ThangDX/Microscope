/**
 * Created by KPMS on 19/01/15.
 */
Template.header.helpers({
    activeRouteClass: function () {
        var args = Array.prototype.slice.call(arguments, 0);
        args.pop();
        var active = _.any(args, function (name) {
            return Router.current() && Router.current().route.getName() === name
        });

        return active && 'active';
    }

});