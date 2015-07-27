angular.module('cpLib').filter('getCustomerPayOnAccountInvoiceRecipientText', function() {
    return function(payOnAccountInvoiceRecipient) {
        switch (payOnAccountInvoiceRecipient) {
            case 1:
                return 'Customer and City Pantry accounts';
            case 2:
                return 'City Pantry accounts';
        }
    };
});
