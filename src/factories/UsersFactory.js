angular.module('cpLib').factory('UsersFactory', function(ApiService, $window) {
    return {
        getAllUsers: () => ApiService.get(`/users`),

        getUser: (userId) => ApiService.get(`/users/${userId}`),

        getStaffEmailById: staffId => ApiService.get(`/users/${staffId}/get-staff-email`),

        masqueradeAsUser: id => ApiService.post(`/user/masquerade`, {id: id}),

        getLoggedInUser: (id = '', oneTimeAuthToken = '') => ApiService.get(`/users/get-authenticated-user?userId=${id}&otat=${oneTimeAuthToken}`),

        registerVendor: registerDetails => ApiService.post(`/user/register-vendor`, registerDetails),

        changeOwnPassword: passwords => ApiService.put(`/user/self/change-password`, passwords),

        changeUserPassword: (userId) => ApiService.put(`/users/${userId}/change-password`),

        updateUser: (userId, details) => ApiService.put(`/users/${userId}`, details),

        getPaymentCards: () => ApiService.get(`/payment-cards`),

        addPaymentCard: (cardDetails) => ApiService.post(`/payment-cards`, cardDetails),

        deletePaymentCard: (cardId) => ApiService.delete(`/payment-cards/${cardId}`),

        isEmailInUse: (email) => {
            const escapedEmail = $window.encodeURIComponent(email);

            return ApiService.get(`/users/is-email-in-use?email=${escapedEmail}`)
                .then(response => response.data.isInUse);
        }
    };
});
