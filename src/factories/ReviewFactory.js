angular.module('cpLib').factory('ReviewFactory', function(ApiService) {
    return {
        setReviewAsPublic: (isPublic, reviewId) => ApiService.put(`/reviews/${reviewId}/set-as-public`, {isPublic: isPublic}),

        getRecentReviews: () => ApiService.get(`/reviews/recent-by-current-vendor`),

        getReview: (reviewId) => ApiService.get(`/reviews/${reviewId}`),

        getAllReviews: () => ApiService.get(`/reviews`)
    };
});
