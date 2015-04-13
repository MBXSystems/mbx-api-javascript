/// <reference path="../typings/jasmine/jasmine.d.ts" />
///<reference path="header.ts"/>

describe("Header", function() {
    var header, signature, credentials;

    beforeEach(function () {
        credentials = new Credentials('test-token','test-secret');
        signature = jasmine.createSpyObj('Signature', ['forRequest']);
        header = new Header(credentials, signature);

        var baseTime = new Date(2013, 9, 23);
        jasmine.clock().install();
        jasmine.clock().mockDate(baseTime);
    });

    afterEach(function () {
        jasmine.clock().uninstall();
    });

    it("is defined", function() {
        expect(Header).toBeDefined();
    });

    describe(".forRequest", function () {
        var h, date, req;

        beforeEach(function () {
            signature.forRequest.and.returnValue("test-signature");
            date = new Date().toISOString();
            req = {method: "GET", url: "test-url", body: "test-body"};
            h = header.forRequest(req);
        });

        it("calls Signature.forRequest", function () {
            expect(signature.forRequest).toHaveBeenCalledWith(req, date);
        });
        
        it("returns the headers", function () {
            expect(h).toEqual({"MBX-Auth": "test-token:test-signature",
                "X-Date": date,
                "Content-Type": "application/json"})
        });
    });

});