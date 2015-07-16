angular.module('cpLib').filter('promoCodeUseTypeText', function() {
    return (useType) => {
        switch (useType) {
            case 1:
                return 'Referral code';
            case 2:
                return 'Reward for referral';
            case 3:
                return 'Discount';
            case 4:
                return 'Vendor penalty';
        }
    };
});
