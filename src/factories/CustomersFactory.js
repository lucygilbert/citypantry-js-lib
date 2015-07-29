angular.module('cpLib').factory('CustomersFactory', function(ApiService, getCustomerPersonaTextFilter,
        getCustomerSalesStaffTypeTextFilter, getCustomerPayOnAccountInvoiceRecipientTextFilter,
        AddressFactory) {
    return {
        getAllCustomers: () => ApiService.get(`/customers`),

        getCustomer: id => ApiService.get(`/customers/${id}`),

        updateCustomer: (id, updatedCustomer) => ApiService.put(`/customers/${id}`, updatedCustomer),

        updateSelf: attributes => ApiService.put(`/customers/self`, attributes),

        getAddresses: () => ApiService.get(`/addresses`),

        getDeliveryAddressById: id => {
            return ApiService.get(`/addresses`)
                .then(response => AddressFactory.pluckAddressFromArray(id, response.data.deliveryAddresses));
        },

        getBillingAddressById: id => {
            return ApiService.get(`/addresses`)
                .then(response => AddressFactory.pluckAddressFromArray(id, response.data.billingAddresses));
        },

        getCustomerReviews: (id) => ApiService.get(`/reviews/customer/${id}`),

        createOrUpdatePayOnAccountDetails: (id, payOnAccountDetails) => ApiService.put(`/customer/${id}/pay-on-account`, payOnAccountDetails),

        revokePaymentOnAccount: (id) => ApiService.put(`/customers/${id}/revoke-payment-on-account`),

        getPersonaOptions() {
            return [1, 2, 3, 4, 5, 6, 7]
                .map(value => ({ value, label: getCustomerPersonaTextFilter(value) }));
        },

        getSalesStaffTypeOptions() {
            return [1, 2, 3]
                .map(value => ({ value, label: getCustomerSalesStaffTypeTextFilter(value) }));
        },

        getPayOnAccountInvoiceRecipientOptions() {
            return [1, 2]
                .map(value => ({ value, label: getCustomerPayOnAccountInvoiceRecipientTextFilter(value) }));
        },

        createCustomersCsvFile(customerIds, fields) {
            return ApiService.post(`/customers/create-csv`, {
                customerIds: customerIds,
                fields: fields
            });
        }
    };
});
