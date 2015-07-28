angular.module('cpLib').factory('AddressFactory', function(ApiService) {
    return {
        getAddresses: () => ApiService.get(`/addresses`),

        getAddressesByVendorId: (id) => ApiService.get(`/addresses/vendor/${id}`),

        getAddressesByCustomerId: (id) => ApiService.get(`/addresses/customer/${id}`),

        createAddress: (address, customerId = '') => ApiService.post(`/addresses`, {address: address, customerId: customerId}),

        updateAddress: (id, updatedAddress) => ApiService.put(`/addresses/${id}`, updatedAddress),

        deleteAddress: (id) => ApiService.delete(`/addresses/${id}`),

        createBillingAddress: (address, customerId = '') => ApiService.post(`/addresses/billing-address`, {address: address, customerId: customerId}),

        pluckAddressFromArray(addressId, addresses) {
            const allIds = addresses.map(address => address.id),
                address = addresses[allIds.indexOf(addressId)];

            if (address) {
                return address;
            } else {
                throw 'Couldn’t find address';
            }
        }
    };
});
