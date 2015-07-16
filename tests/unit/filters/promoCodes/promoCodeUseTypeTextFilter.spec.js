describe('promoCodeUseTypeText filter', function() {
    'use strict';

    beforeEach(function () {
        module('cpLib');
    });

    it('should translate a use type', inject(function(promoCodeUseTypeTextFilter) {
        expect(promoCodeUseTypeTextFilter(1)).toEqual('Referral code');
    }));
});
