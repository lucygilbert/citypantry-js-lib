describe('CustomersFactory', function () {
    'use strict';

    beforeEach(function () {
        module('cpLib');
    });

    var CustomersFactory;

    beforeEach(inject(function(_CustomersFactory_) {
        CustomersFactory = _CustomersFactory_;
    }));

    describe('getPersonaOptions', function() {
        it('should return all options', function() {
            var result = CustomersFactory.getPersonaOptions();
            expect(result.length).toBe(7);
        });

        it('should return a translated label for each persona', function() {
            var result = CustomersFactory.getPersonaOptions();
            expect(result[0].label).toEqual('The Early Adopter');
        });
    });

    describe('getSalesStaffTypeOptions', function() {
        it('should return all options', function() {
            var result = CustomersFactory.getSalesStaffTypeOptions();
            expect(result.length).toBe(3);
        });

        it('should return a translated label for each sales staff type', function() {
            var result = CustomersFactory.getSalesStaffTypeOptions();
            expect(result[0].label).toEqual('Premium, one-off');
        });
    });

    describe('getPayOnAccountInvoiceRecipientOptions', function() {
        it('should return all options', function() {
            var result = CustomersFactory.getPayOnAccountInvoiceRecipientOptions();
            expect(result.length).toBe(2);
        });

        it('should return a translated label for each recipient option', function() {
            var result = CustomersFactory.getPayOnAccountInvoiceRecipientOptions();
            expect(result[0].label).toEqual('Customer and City Pantry accounts');
        });
    });
});
