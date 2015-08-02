angular.module('cpLib').factory('ReviewFactory', function(ApiService) {
    return {
        setReviewAsPublic: (isPublic, reviewId) => ApiService.put(`/reviews/${reviewId}/set-as-public`, {isPublic: isPublic}),

        getRecentReviews: (dayLimit) => ApiService.get(`/reviews/recent-by-current-vendor?days=${dayLimit}`),

        getReview: (reviewId) => ApiService.get(`/reviews/${reviewId}`),

        getAllReviews: () => ApiService.get(`/reviews`)
    };
});
