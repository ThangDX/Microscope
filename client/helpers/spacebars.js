/**
 * Created by KPMS on 19/01/15.
 */
UI.registerHelper('pluralize', function(n, thing) {
    if(n===1) {
        return '1' + thing;
    } else {
        return n + ' ' + thing + 's';
    }
});