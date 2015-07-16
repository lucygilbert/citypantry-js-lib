describe('promoCodeTypeText filter', function() {
    'use strict';

    beforeEach(function () {
        module('cpLib');
    });

    it('should translate a type', inject(function(promoCodeTypeTextFilter) {
        expect(promoCodeTypeTextFilter('fixed')).toEqual('Fixed amount');
    }));
});
