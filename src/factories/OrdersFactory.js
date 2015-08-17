angular.module('cpLib').factory('OrdersFactory', function(ApiService, getDeliveryStatusTextFilter) {
    // Cache of Date objects, to avoid having to create a new Date object many times when running
    // an array filter or sort.
    const dateObjectCache = {};

    const getDateObject = (date) => {
        if (dateObjectCache[date] === undefined) {
            dateObjectCache[date] = new Date(date);
        }

        return dateObjectCache[date];
    };

    const service = {
        getAllOrders: () => ApiService.get(`/orders`),

        getOrdersByCurrentVendor: () => ApiService.get(`/orders/by-current-vendor`),

        getOrdersByCurrentCustomer: () => ApiService.get(`/orders/by-current-customer`),

        /**
         * Get the next order for a customer, which can have either the status 'pending vendor
         * approval' or 'accepted'.
         *
         * @return {Promise} Resolves to an order, or null if there is none.
         */
        getNextCustomerOrder() {
            return this.getOrdersByCurrentCustomer()
                .then((response) => {
                    const orders = response.data.orders;
                    if (orders.length === 0) {
                        return null;
                    }

                    const now = new Date();

                    return orders.filter((order) => getDateObject(order.requestedDeliveryDate) >= now)
                        .sort((a, b) => getDateObject(a.requestedDeliveryDate) - getDateObject(b.requestedDeliveryDate))
                        .shift();
                });
        },

        getOrder: (id) => ApiService.get(`/orders/${id}`),

        getOrderMessages: (id) => ApiService.get(`/orders/${id}/messages`),

        getOrdersWithMessages: () => ApiService.get(`/orders/with-messages`),

        getOrderReviews: (id) => ApiService.get(`/reviews/order/${id}`),

        sendMessage: (id, message) => ApiService.put(`/orders/${id}/messages`, {message: message}),

        updateOrder: (id, updatedOrder) => ApiService.put(`/order/${id}`, updatedOrder),

        deleteOrder: (id, reason = '') => ApiService.delete(`/order/${id}?deletionReason=${reason}`),

        getCourierOrders: () => ApiService.get(`/orders/courier`),

        setDeliveryStatus: (id, statusDetails) => ApiService.put(`/order/${id}/delivery-status`, statusDetails),

        addCustomerServiceEvent: (id, event) => ApiService.post(`/order/${id}/customer-service-events`, {event: event}),

        acceptOrder: (id) => ApiService.put(`/order/${id}/accept`),

        addOrderReview: (id, review) => ApiService.post(`/reviews/order/${id}`, review),

        getHeadCountOptions(maxPeople = 1, minPeople = 1) {
            if (maxPeople === null) {
                maxPeople = 1000;
            }
            if (minPeople === null) {
                minPeople = 1;
            }

            const options = [];

            for (let i = minPeople; i <= maxPeople; i += 1) {
                options.push(i);
            }

            return options;
        },

        getAllCustomerInvoices: () => ApiService.get(`/orders/customer-invoices`),

        getCustomerInvoice: (id) => ApiService.get(`/orders/customer-invoice/${id}`),

        getCustomerInvoiceAsHtml: (id) => ApiService.get(`/orders/customer-invoice-as-html/${id}`),

        updateCustomerInvoiceStatus: (id, status) => ApiService.put(`/orders/customer-invoice/${id}/status`, {status: status}),

        markCustomerInvoiceAsPaid: (id) => service.updateCustomerInvoiceStatus(id, 2),

        markCustomerInvoiceAsAwaitingPayment: (id) => service.updateCustomerInvoiceStatus(id, 1),

        reissueCustomerInvoice: (id) => ApiService.put(`/orders/customer-invoice/${id}/reissue`),

        refundOrder: (id, refundDetails) => ApiService.put(`/order/${id}/refund`, refundDetails),

        getOrderInvoices: (orderId) => ApiService.get(`/orders/customer-invoices-by-order/${orderId}`),

        createOrder: orderDetails => ApiService.post(`/orders`, orderDetails),

        getDeliveryStatusOptions: () => {
            return [1, 2, 3, 4].map(value => ({ value, label: getDeliveryStatusTextFilter(value) }));
        },

        createOrdersCsvFile(orderIds, fields) {
            return ApiService.post(`/orders/create-csv`, {
                orderIds: orderIds,
                fields: fields
            });
        },

        getCustomerTeamOrders: customerId => ApiService.get(`/orders/customer/${customerId}/team-orders`),

        getCustomerTeamOrder: (customerId, orderId) => ApiService.get(`/orders/customer/${customerId}/team-orders/${orderId}`)
    };

    return service;
});
