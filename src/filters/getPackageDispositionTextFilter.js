angular.module('cpLib').filter('getPackageDispositionText', function() {
    return function(disposition) {
        switch (disposition) {
            case 'must_have':
            case 1:
                return 'Must have';
            case 'must_not_have_per_staff':
            case 2:
                return 'Must not have (per staff)';
            case 'must_not_have_per_customer':
            case 3:
                return 'Must not have (per customer)';
            default:
                throw 'Unexpected disposition: ' + disposition;
        }
    };
});
