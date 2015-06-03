angular.module('cpLib').filter('getMealPlanStatusText', function() {
    return function(mealPlanStatus) {
        switch (mealPlanStatus) {
            case 2:
                return 'Pending staff approval';
            case 4:
                return 'Pending customer approval';
            case 3:
                return 'Active';
            default:
                return 'Unknown';
        }
    };
});
