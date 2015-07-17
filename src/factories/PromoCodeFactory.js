angular.module('cpLib').factory('PromoCodeFactory', function(ApiService, promoCodeTypeTextFilter,
        promoCodeUseTypeTextFilter) {
    return {
        getPromoCodeByCode: code => ApiService.get(`/promo-codes/get-by-code?code=${code}`),

        getAllPromoCodes: () => ApiService.get(`/promo-codes`),

        createPromoCode: (data) => ApiService.post(`/promo-codes`, data),

        getPromoCodeTypes() {
            return ['fixed', 'percentage']
                .map(value => ({ value, label: promoCodeTypeTextFilter(value) }));
        },

        getPromoCodeUseTypes() {
            return [1, 2, 3, 4]
                .map(value => ({ value, label: promoCodeUseTypeTextFilter(value) }));
        }
    };
});
