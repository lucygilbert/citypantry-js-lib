angular.module('cpLib').filter('messageLineBreakFormatter', function($sce) {
    return function(message) {
        if (!message) {
            return $sce.trustAsHtml('');
        }

        const formattedMessage = message.replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/\n/g, '<br />');

        return $sce.trustAsHtml(formattedMessage);
    };
});
