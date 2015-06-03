angular.module('cpLib').filter('getCustomerMealPlanDurationText', function() {
    return function(duration) {
        switch (duration) {
            case 1:
            case 'duration_two_weeks':
                return 'Two weeks';
            case 2:
            case 'duration_one_month':
                return 'One month';
            case 3:
            case 'duration_until_end_of_the_month':
                return 'Until the end of the month';
            default:
                throw 'Unexpected duration: ' + duration;
        }
    };
});
