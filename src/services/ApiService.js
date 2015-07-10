angular.module('cpLib').service('ApiService', function($http, ApiAuthService, API_BASE) {
    function getAuthHeaders() {
        if (typeof ApiAuthService === 'function') {
            // This is for backwards compatability with clients using version 1.0.81 or earlier.
            return {
                'X-CityPantry-UserId': ApiAuthService().userId,
                'X-CityPantry-AuthToken': ApiAuthService().authToken,
            };
        } else if (typeof ApiAuthService.getAuthHeaders === 'function') {
            // This is for clients using version 1.0.82 or newer.
            return {
                'X-CityPantry-UserId': ApiAuthService.getAuthHeaders().userId,
                'X-CityPantry-AuthToken': ApiAuthService.getAuthHeaders().authToken,
            };
        } else {
            return {};
        }
    }

    function getExtraHeaders() {
        if (typeof ApiAuthService.getExtraHeaders === 'function') {
            return ApiAuthService.getExtraHeaders();
        } else {
            return {};
        }
    }

    function addApiHeaders(config = {}) {
        config.headers = config.headers || {};

        angular.extend(config.headers, getAuthHeaders());
        angular.extend(config.headers, getExtraHeaders());

        return config;
    }

    return {
        get: function(url, config) {
            config = addApiHeaders(config);

            return $http.get(API_BASE + url, config);
        },

        post: function(url, data, config) {
            config = addApiHeaders(config);

            return $http.post(API_BASE + url, data, config);
        },

        put: function(url, data, config) {
            config = addApiHeaders(config);

            return $http.put(API_BASE + url, data, config);
        },

        'delete': function(url, config) {
            config = addApiHeaders(config);

            return $http.delete(API_BASE + url, config);
        },

        getAuthHeaders: function() {
            return getAuthHeaders();
        },

        getExtraHeaders: function() {
            return getExtraHeaders();
        },

        getAllHeaders: function() {
            return angular.extend({}, this.getAuthHeaders(), this.getExtraHeaders());
        }
    };
});
