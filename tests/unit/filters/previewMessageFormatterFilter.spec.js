describe('previewMessage formatter', function() {
    'use strict';

    beforeEach(function () {
        module('cpLib');
    });

    it('should return a string of the specified length followed by an ellipsis', inject(function(previewMessageFormatterFilter) {
        expect(previewMessageFormatterFilter('They couldn\'t hit an elephant from here.', 34))
            .toEqual('They couldn\'t hit an elephant from...', 34);
    }));
});
