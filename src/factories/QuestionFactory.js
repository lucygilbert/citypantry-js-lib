angular.module('cpLib').factory('QuestionFactory', function(ApiService) {
    return {
        getQuestionsByType: type => ApiService.get(`/questions/${type}`)
    };
});
