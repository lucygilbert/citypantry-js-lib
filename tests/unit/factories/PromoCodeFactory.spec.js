describe('PromoCodeFactory', function () {
    'use strict';

    beforeEach(function () {
        module('cpLib');
    });

    var PromoCodeFactory;
    var ApiService;

    beforeEach(inject(function(_PromoCodeFactory_, _ApiService_) {
        PromoCodeFactory = _PromoCodeFactory_;
        ApiService = _ApiService_;
    }));

    describe('getPromoCodeTypes', function() {
        var result;

        beforeEach(function() {
            result = PromoCodeFactory.getPromoCodeTypes();
        });

        it('should return two types', function() {
            expect(result.length).toBe(2);
        });

        it('should return objects with a value and the related text label', function() {
            expect(result[0].value).toBe('fixed');
            expect(result[0].label).toBe('Fixed amount');
        });
    });

    describe('getPromoCodeUseTypes', function() {
        var result;

        beforeEach(function() {
            result = PromoCodeFactory.getPromoCodeUseTypes();
        });

        it('should return two types', function() {
            expect(result.length).toBe(4);
        });

        it('should return objects with a value and the related text label', function() {
            expect(result[0].value).toBe(1);
            expect(result[0].label).toBe('Referral code');
        });
    });
});
