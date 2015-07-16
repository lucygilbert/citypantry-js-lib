angular.module('cpLib').filter('promoCodeTypeText', function() {
    return (type) => {
        switch (type) {
            case 'percentage':
                return 'Percentage';
            case 'fixed':
                return 'Fixed amount';
        }
    };
});
