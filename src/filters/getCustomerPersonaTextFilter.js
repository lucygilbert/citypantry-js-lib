angular.module('cpLib').filter('getCustomerPersonaText', function() {
    return function(persona) {
        switch (persona) {
            case 1:
                return 'The Early Adopter';
            case 2:
                return 'The Eventist';
            case 3:
                return 'The Professional';
            case 4:
                return 'The Olivia';
            case 5:
                return 'The Big Dog';
            case 6:
                return 'The Enterprise';
            case 7:
                return 'The Harry Herneage';
            default:
                return 'None';
        }
    };
});
