angular.module('cpLib').factory('MealPlanFactory', function (ApiService) {
    return {
        getCustomers: () => ApiService.get(`/meal-plan/customers`),

        getCustomerMealPlanRequirements: (id) => ApiService.get(`/meal-plan/customers/${id}/requirements`),

        setCustomerMealPlanRequirements: (id, mealPlanRequirements) => ApiService.post(`/meal-plan/customers/${id}/requirements`, mealPlanRequirements),

        generateMealPlan: (id, startDate) => ApiService.post(`/meal-plan/customers/${id}/generate`, {startDate: startDate}),

        registerForMealPlan: (registrationDetails) => ApiService.post(`/meal-plan/register`, registrationDetails),

        getCustomerMealPlans: (customerId) => ApiService.get(`/meal-plan/customers/${customerId}/meal-plans`),

        getCustomerMealPlan: (customerId, mealPlanId) => ApiService.get(`/meal-plan/customers/${customerId}/meal-plans/${mealPlanId}`),

        checkProposedOrdersAvailability: (customerId, mealPlanId) => ApiService.post(`/meal-plan/customers/${customerId}/meal-plans/${mealPlanId}/availabilty`),

        setPackagesOnDates: (orders, customerId, mealPlanId) => ApiService.post(`/meal-plan/customers/${customerId}/meal-plans/${mealPlanId}/set-package-dates`, orders),

        replaceWithUnusedAlternativePackage: (date, customerId, mealPlanId) => ApiService.post(`/meal-plan/customers/${customerId}/meal-plans/${mealPlanId}/replace-with-unused-alternative-package`, date),

        sendToCustomer: (customerId, mealPlanId) => ApiService.post(`/meal-plan/customers/${customerId}/meal-plans/${mealPlanId}/send-to-customer`),

        confirmProposedOrders: (customerId, mealPlanId) => ApiService.post(`/meal-plan/customers/${customerId}/meal-plans/${mealPlanId}/confirm-proposed-orders`),

        editProposedOrder: (orderDetails, customerId, mealPlanId) => ApiService.post(`/meal-plan/customers/${customerId}/meal-plans/${mealPlanId}/edit-proposed-order`, orderDetails)
    };
});
