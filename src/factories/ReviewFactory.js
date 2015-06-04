angular.module('cpLib').factory('ReviewFactory', function(ApiService) {
    return {
        setReviewAsPublic: (isPublic, reviewId) => ApiService.put('/reviews/${reviewId}/set-as-public', {isPublic: isPublic}),
    };
});
