angular.module('cpLib').factory('LocationFactory', function(ApiService, $window) {
    return {
        getCoordinatesFromPostcode(postcode) {
            const escapedPostcode = $window.encodeURIComponent(postcode);

            return ApiService.get(`/location/postcode/coordinates?postcode=${escapedPostcode}`);
        }
    };
});
