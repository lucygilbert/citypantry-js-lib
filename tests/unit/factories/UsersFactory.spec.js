describe('UsersFactory', function () {
    'use strict';

    beforeEach(function () {
        module('cpLib');
    });

    var UsersFactory;
    var $httpBackend;

    beforeEach(inject(function(_UsersFactory_, _$httpBackend_) {
        UsersFactory = _UsersFactory_;
        $httpBackend = _$httpBackend_;
    }));

    describe('isEmailInUse', function() {
        it('should URL-encode the email address', function() {
            $httpBackend.expectGET('http://api-base/users/is-email-in-use?email=bunny%2Btest%40citypantry.test')
                .respond('anything');

            UsersFactory.isEmailInUse('bunny+test@citypantry.test');
            $httpBackend.flush();
            $httpBackend.verifyNoOutstandingExpectation();
        });

        it('should resolve to true if the email is in use', function() {
            $httpBackend.expectGET('http://api-base/users/is-email-in-use?email=bunny%2Btest%40citypantry.test')
                .respond({isInUse: true});

            var result;
            UsersFactory.isEmailInUse('bunny+test@citypantry.test').then(function(_result_) {
                result = _result_;
            });
            $httpBackend.flush();

            expect(result).toBe(true);
            $httpBackend.verifyNoOutstandingExpectation();
        });

        it('should resolve to false if the email is in use', function() {
            $httpBackend.expectGET('http://api-base/users/is-email-in-use?email=bunny%2Btest%40citypantry.test')
                .respond({isInUse: false});

            var result;
            UsersFactory.isEmailInUse('bunny+test@citypantry.test').then(function(_result_) {
                result = _result_;
            });
            $httpBackend.flush();

            expect(result).toBe(false);
            $httpBackend.verifyNoOutstandingExpectation();
        });
    });
});
