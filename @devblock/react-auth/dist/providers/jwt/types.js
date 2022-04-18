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
exports.JwtRenewTokenResponse = exports.JwtRenewTokenRequest = exports.JwtResetPasswordResponse = exports.JwtResetPasswordRequest = exports.JwtSignOutResponse = exports.JwtSignOutRequest = exports.JwtSignUpResponse = exports.JwtSignUpRequest = exports.JwtSignInResponse = exports.JwtSignInRequest = void 0;
var types_1 = require("../../core/types");
var JwtSignInRequest = /** @class */ (function (_super) {
    __extends(JwtSignInRequest, _super);
    function JwtSignInRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return JwtSignInRequest;
}(types_1.SignInRequest));
exports.JwtSignInRequest = JwtSignInRequest;
var JwtSignInResponse = /** @class */ (function (_super) {
    __extends(JwtSignInResponse, _super);
    function JwtSignInResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return JwtSignInResponse;
}(types_1.SignInResponse));
exports.JwtSignInResponse = JwtSignInResponse;
var JwtSignUpRequest = /** @class */ (function (_super) {
    __extends(JwtSignUpRequest, _super);
    function JwtSignUpRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return JwtSignUpRequest;
}(types_1.SignUpRequest));
exports.JwtSignUpRequest = JwtSignUpRequest;
var JwtSignUpResponse = /** @class */ (function (_super) {
    __extends(JwtSignUpResponse, _super);
    function JwtSignUpResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return JwtSignUpResponse;
}(types_1.SignUpResponse));
exports.JwtSignUpResponse = JwtSignUpResponse;
var JwtSignOutRequest = /** @class */ (function (_super) {
    __extends(JwtSignOutRequest, _super);
    function JwtSignOutRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return JwtSignOutRequest;
}(types_1.SignOutRequest));
exports.JwtSignOutRequest = JwtSignOutRequest;
var JwtSignOutResponse = /** @class */ (function (_super) {
    __extends(JwtSignOutResponse, _super);
    function JwtSignOutResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return JwtSignOutResponse;
}(types_1.SignOutResponse));
exports.JwtSignOutResponse = JwtSignOutResponse;
var JwtResetPasswordRequest = /** @class */ (function (_super) {
    __extends(JwtResetPasswordRequest, _super);
    function JwtResetPasswordRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return JwtResetPasswordRequest;
}(types_1.ResetPasswordRequest));
exports.JwtResetPasswordRequest = JwtResetPasswordRequest;
var JwtResetPasswordResponse = /** @class */ (function (_super) {
    __extends(JwtResetPasswordResponse, _super);
    function JwtResetPasswordResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return JwtResetPasswordResponse;
}(types_1.ResetPasswordResponse));
exports.JwtResetPasswordResponse = JwtResetPasswordResponse;
var JwtRenewTokenRequest = /** @class */ (function (_super) {
    __extends(JwtRenewTokenRequest, _super);
    function JwtRenewTokenRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return JwtRenewTokenRequest;
}(types_1.RenewTokenRequest));
exports.JwtRenewTokenRequest = JwtRenewTokenRequest;
var JwtRenewTokenResponse = /** @class */ (function (_super) {
    __extends(JwtRenewTokenResponse, _super);
    function JwtRenewTokenResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return JwtRenewTokenResponse;
}(types_1.RenewTokenResponse));
exports.JwtRenewTokenResponse = JwtRenewTokenResponse;
//# sourceMappingURL=types.js.map