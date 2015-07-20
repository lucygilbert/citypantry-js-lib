angular.module('cpLib').filter('getCustomerSalesStaffTypeText', function() {
    return function(salesStaffType) {
        switch (salesStaffType) {
            case 1:
                return 'Premium, one-off';
            case 2:
                return 'Premium, meal plan';
            case 3:
                return 'Non-premium';
            default:
                return 'None';
        }
    };
});
