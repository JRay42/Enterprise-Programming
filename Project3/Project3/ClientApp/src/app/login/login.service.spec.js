"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var login_service_1 = require("./login.service");
describe('LoginService', function () {
    beforeEach(function () { return testing_1.TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = testing_1.TestBed.get(login_service_1.LoginService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=login.service.spec.js.map