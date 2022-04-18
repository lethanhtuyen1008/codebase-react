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
exports.CognitoRenewTokenResponse = exports.CognitoRenewTokenRequest = exports.CognitoResetPasswordResponse = exports.CognitoResetPasswordRequest = exports.CognitoSignOutResponse = exports.CognitoSignOutRequest = exports.CognitoSignUpResponse = exports.CognitoSignUpRequest = exports.CognitoSignInResponse = exports.CognitoSignInRequest = exports.CognitoAuthConfig = void 0;
var types_1 = require("../../core/types");
var CognitoAuthConfig = /** @class */ (function (_super) {
    __extends(CognitoAuthConfig, _super);
    function CognitoAuthConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CognitoAuthConfig;
}(types_1.AuthConfig));
exports.CognitoAuthConfig = CognitoAuthConfig;
var CognitoSignInRequest = /** @class */ (function (_super) {
    __extends(CognitoSignInRequest, _super);
    function CognitoSignInRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CognitoSignInRequest;
}(types_1.SignInRequest));
exports.CognitoSignInRequest = CognitoSignInRequest;
var CognitoSignInResponse = /** @class */ (function (_super) {
    __extends(CognitoSignInResponse, _super);
    function CognitoSignInResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CognitoSignInResponse;
}(types_1.SignInResponse));
exports.CognitoSignInResponse = CognitoSignInResponse;
var CognitoSignUpRequest = /** @class */ (function (_super) {
    __extends(CognitoSignUpRequest, _super);
    function CognitoSignUpRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CognitoSignUpRequest;
}(types_1.SignUpRequest));
exports.CognitoSignUpRequest = CognitoSignUpRequest;
var CognitoSignUpResponse = /** @class */ (function (_super) {
    __extends(CognitoSignUpResponse, _super);
    function CognitoSignUpResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CognitoSignUpResponse;
}(types_1.SignUpResponse));
exports.CognitoSignUpResponse = CognitoSignUpResponse;
var CognitoSignOutRequest = /** @class */ (function (_super) {
    __extends(CognitoSignOutRequest, _super);
    function CognitoSignOutRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CognitoSignOutRequest;
}(types_1.SignOutRequest));
exports.CognitoSignOutRequest = CognitoSignOutRequest;
var CognitoSignOutResponse = /** @class */ (function (_super) {
    __extends(CognitoSignOutResponse, _super);
    function CognitoSignOutResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CognitoSignOutResponse;
}(types_1.SignOutResponse));
exports.CognitoSignOutResponse = CognitoSignOutResponse;
var CognitoResetPasswordRequest = /** @class */ (function (_super) {
    __extends(CognitoResetPasswordRequest, _super);
    function CognitoResetPasswordRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CognitoResetPasswordRequest;
}(types_1.ResetPasswordRequest));
exports.CognitoResetPasswordRequest = CognitoResetPasswordRequest;
var CognitoResetPasswordResponse = /** @class */ (function (_super) {
    __extends(CognitoResetPasswordResponse, _super);
    function CognitoResetPasswordResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CognitoResetPasswordResponse;
}(types_1.ResetPasswordResponse));
exports.CognitoResetPasswordResponse = CognitoResetPasswordResponse;
var CognitoRenewTokenRequest = /** @class */ (function (_super) {
    __extends(CognitoRenewTokenRequest, _super);
    function CognitoRenewTokenRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CognitoRenewTokenRequest;
}(types_1.RenewTokenRequest));
exports.CognitoRenewTokenRequest = CognitoRenewTokenRequest;
var CognitoRenewTokenResponse = /** @class */ (function (_super) {
    __extends(CognitoRenewTokenResponse, _super);
    function CognitoRenewTokenResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CognitoRenewTokenResponse;
}(types_1.RenewTokenResponse));
exports.CognitoRenewTokenResponse = CognitoRenewTokenResponse;
//# sourceMappingURL=types.js.map