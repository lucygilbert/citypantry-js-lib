angular.module('cpLib').factory('VendorUsersFactory', function(ApiService) {
    return {
        getVendorUsers: (vendorId) => ApiService.get(`/vendors/${vendorId}/users`),

        addNewUserToVendor(vendorId, name, email, password) {
            return ApiService.post(`/vendors/${vendorId}/users`, {
                newUser: {
                    name,
                    email,
                    password
                }
            });
        },

        addExistingUserToVendor(vendorId, userId) {
            return ApiService.post(`/vendors/${vendorId}/users`, {
                existingUser: userId
            });
        },

        removeUserFromVendor: (vendorId, userId) => ApiService.delete(`/vendors/${vendorId}/users/${userId}`)
    };
});
