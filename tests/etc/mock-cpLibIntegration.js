angular.module('cpLibIntegration', [])
    .constant('API_BASE', 'http://api-base')
    .service('ApiAuthService', function() {
        return {
            getAuthHeaders: function() {
                return {
                    userId: 'abc123',
                    authToken: 'zzzzzz'
                };
            },

            getExtraHeaders: function() {
                return {
                    'X-CityPantry-DefaultExtraHeader': 'something'
                };
            }
        };
    });
