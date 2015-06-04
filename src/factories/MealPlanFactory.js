angular.module('cpLib').factory('MealPlanFactory', function (ApiService) {
    return {
        getCustomers: () => ApiService.get(`/meal-plan/customers`),

        getCustomerMealPlanRequirements: (id) => ApiService.get(`/meal-plan/customers/${id}/requirements`),

        setCustomerMealPlanRequirements: (id, mealPlanRequirements) => ApiService.post(`/meal-plan/customers/${id}/requirements`, mealPlanRequirements),

        generateMealPlan: (id, startDate) => ApiService.post(`/meal-plan/customers/${id}/generate`, {startDate: startDate}),

        registerForMealPlan: (registrationDetails) => ApiService.post(`/meal-plan/register`, registrationDetails),

        getCustomerMealPlans: (customerId) => ApiService.get(`/meal-plan/customers/${customerId}/meal-plans`),

        getCustomerMealPlan: (customerId, mealPlanId) => ApiService.get(`/meal-plan/customers/${customerId}/meal-plans/${mealPlanId}`),

        checkProposedOrdersAvailability: (customerId, mealPlanId, proposedOrders) => ApiService.post(`/meal-plan/customers/${customerId}/meal-plans/${mealPlanId}/availability`, {checks: proposedOrders}),

        setPackagesOnDates: (customerId, mealPlanId, orders) => ApiService.post(`/meal-plan/customers/${customerId}/meal-plans/${mealPlanId}/set-package-dates`, orders),

        /**
         * @param  {String} customerId
         * @param  {String} mealPlanId
         * @param  {String} date       An ISO-8601 string.
         */
        replaceWithUnusedAlternativePackage: (customerId, mealPlanId, date) => ApiService.post(`/meal-plan/customers/${customerId}/meal-plans/${mealPlanId}/replace-with-unused-alternative-package`, date),

        sendToCustomer: (customerId, mealPlanId) => ApiService.post(`/meal-plan/customers/${customerId}/meal-plans/${mealPlanId}/send-to-customer`),

        confirmProposedOrders: (customerId, mealPlanId, attributes) => ApiService.post(`/meal-plan/customers/${customerId}/meal-plans/${mealPlanId}/confirm-proposed-orders`, attributes),

        editProposedOrder: (customerId, mealPlanId, orderDetails) => ApiService.post(`/meal-plan/customers/${customerId}/meal-plans/${mealPlanId}/edit-proposed-order`, orderDetails)
    };
});
