"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.CognitoAuthProvider = void 0;
var core_1 = require("../../core");
var CognitoAuthProvider = /** @class */ (function (_super) {
    __extends(CognitoAuthProvider, _super);
    function CognitoAuthProvider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CognitoAuthProvider.prototype.signUp = function (request) {
        console.log(request);
        return Promise.resolve({});
    };
    CognitoAuthProvider.prototype.signIn = function (request) {
        console.log(request);
        return Promise.resolve({});
    };
    CognitoAuthProvider.prototype.signOut = function (request) {
        console.log(request);
        return Promise.resolve({});
    };
    CognitoAuthProvider.prototype.isSignedIn = function () {
        return false;
    };
    CognitoAuthProvider.prototype.resetPassword = function (request) {
        console.log(request);
        return Promise.resolve({});
    };
    CognitoAuthProvider.prototype.renewToken = function (request) {
        console.log(request);
        return Promise.resolve({});
    };
    CognitoAuthProvider.prototype.verifyAccount = function (endpoint, request) {
        console.log(request);
        return Promise.resolve({});
    };
    CognitoAuthProvider.prototype.resendVerification = function (endpoint, request) {
        console.log(request);
        return Promise.resolve({});
    };
    return CognitoAuthProvider;
}(core_1.BaseAuthProvider));
exports.CognitoAuthProvider = CognitoAuthProvider;
//# sourceMappingURL=index.js.map