angular.module('cpLib').filter('getPaymentTermText', function() {
    return function(paymentTerm) {
        switch (paymentTerm) {
            case 1:
                return 'Paid on account';
            case 2:
                return 'Paid by card at the time of order';
            case 3:
                return 'Paid by card at the time of delivery';
            case 4:
                return 'Free';
            default:
                throw 'Unexpected payment term: ' + paymentTerm;
        }
    };
});
