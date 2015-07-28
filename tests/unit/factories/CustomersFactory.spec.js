describe('CustomersFactory', function () {
    'use strict';

    beforeEach(function () {
        module('cpLib');
    });

    var CustomersFactory;
    var $httpBackend;

    beforeEach(inject(function(_CustomersFactory_, _$httpBackend_) {
        CustomersFactory = _CustomersFactory_;
        $httpBackend = _$httpBackend_;
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

    describe('getDeliveryAddressById', function() {
        it('should resolve to a delivery address', function() {
            $httpBackend.expectGET('http://api-base/addresses').respond({
                deliveryAddresses: [
                    {id: 1, postcode: 'A1'},
                    {id: 2, postcode: 'B1'},
                    {id: 3, postcode: 'C1'},
                ],
                billingAddresses: [
                    {id: 1, postcode: 'A2'},
                    {id: 2, postcode: 'B2'},
                    {id: 3, postcode: 'C2'},
                ],
            });

            var result;
            CustomersFactory.getDeliveryAddressById(2).then(function(_result_) {
                result = _result_;
            });
            $httpBackend.flush();

            expect(result.postcode).toBe('B1');
            $httpBackend.verifyNoOutstandingExpectation();
        });
    });

    describe('getBillingAddressById', function() {
        it('should resolve to a billing address', function() {
            $httpBackend.expectGET('http://api-base/addresses').respond({
                deliveryAddresses: [
                    {id: 1, postcode: 'A1'},
                    {id: 2, postcode: 'B1'},
                    {id: 3, postcode: 'C1'},
                ],
                billingAddresses: [
                    {id: 1, postcode: 'A2'},
                    {id: 2, postcode: 'B2'},
                    {id: 3, postcode: 'C2'},
                ],
            });

            var result;
            CustomersFactory.getBillingAddressById(2).then(function(_result_) {
                result = _result_;
            });
            $httpBackend.flush();

            expect(result.postcode).toBe('B2');
            $httpBackend.verifyNoOutstandingExpectation();
        });
    });
});
