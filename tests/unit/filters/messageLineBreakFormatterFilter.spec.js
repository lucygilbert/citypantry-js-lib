describe('previewMessage formatter', function() {
    'use strict';

    beforeEach(function () {
        module('cpLib');
    });

    it('should return the string with br tags instead of newline characters', inject(function(messageLineBreakFormatterFilter, $sce) {
        expect(messageLineBreakFormatterFilter('THIS.\nIS.\nSPARTA.').$$unwrapTrustedValue())
            .toEqual('THIS.<br />IS.<br />SPARTA.');
    }));

    it('should escape other HTML in the string', inject(function(messageLineBreakFormatterFilter, $sce) {
        expect(messageLineBreakFormatterFilter('<script>alert(\'Knock knock, Neo.\');</script>').$$unwrapTrustedValue())
            .toEqual('&lt;script&gt;alert(\'Knock knock, Neo.\');&lt;/script&gt;');
    }));
});
