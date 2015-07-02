angular.module('cpLib').factory('TeamReviewFactory', function(ApiService) {
    return {
        getTeamReviewsByOrder: (orderId) => ApiService.get(`/reviews/team/order/${orderId}`),

        createTeamReviewForOrder: (orderId, reviewData) => ApiService.post(`/reviews/team/order/${orderId}`, reviewData),

        updateTeamReview: (teamReviewId, reviewData) => ApiService.put(`/reviews/team/review/${teamReviewId}`, reviewData)
    };
});
