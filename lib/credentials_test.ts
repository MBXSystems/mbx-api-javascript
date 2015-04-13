/// <reference path="../typings/jasmine/jasmine.d.ts" />
///<reference path="credentials.ts"/>

describe("Credentials", function () {
    var credentials;

    beforeEach(function () {
        credentials = new Credentials("test-token", "test-secret");
    });

    it("exists", function () {
        expect(Credentials).toBeDefined();
    });

    it("stores the token", function () {
        expect(credentials.token).toBe("test-token");
    });

    it("stores the secret", function () {
        expect(credentials.secret).toBe("test-secret");
    });

});