angular.module('cpLib').filter('previewMessageFormatter', function() {
    return function(message, lengthOfPreview) {
        if (!message) {
            return '';
        }

        let formattedMessage = message;

        if (formattedMessage.length > lengthOfPreview) {
            formattedMessage = message.slice(0, lengthOfPreview);
            formattedMessage += '...';
        }

        return formattedMessage;
    };
});
