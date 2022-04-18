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
exports.JwtAuthProvider = void 0;
var core_1 = require("../../core");
var cookieProvider_1 = require("../../core/cookieProvider");
var utils_1 = require("../../helpers/utils");
var JwtAuthProvider = /** @class */ (function (_super) {
    __extends(JwtAuthProvider, _super);
    function JwtAuthProvider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    JwtAuthProvider.prototype.signUp = function (endpoint, request) {
        var axiosClient = this.config.axiosClient;
        return axiosClient.post(endpoint, request);
    };
    JwtAuthProvider.prototype.signIn = function (endpoint, request) {
        var axiosClient = this.config.axiosClient;
        return axiosClient.post(endpoint, request);
    };
    JwtAuthProvider.prototype.signOut = function () {
        var _a = this.config, accessTokenKey = _a.accessTokenKey, refreshTokenKey = _a.refreshTokenKey;
        cookieProvider_1.cookieProvider.multiDelete([accessTokenKey, refreshTokenKey]);
        return Promise.resolve(true);
    };
    JwtAuthProvider.prototype.isSignedIn = function () {
        return cookieProvider_1.cookieProvider.has(this.config.accessTokenKey);
    };
    JwtAuthProvider.prototype.resetPassword = function (endpoint, request) {
        console.log(request);
        return Promise.resolve({});
    };
    JwtAuthProvider.prototype.renewToken = function (endpoint, request) {
        var axiosClient = this.config.axiosClient;
        return axiosClient.post(endpoint, request);
    };
    JwtAuthProvider.prototype.verifyAccount = function (endpoint, request) {
        var axiosClient = this.config.axiosClient;
        var id = request.id, code = request.code;
        var formatedEndpoint = utils_1.util.formatString(endpoint, { id: id });
        return axiosClient.patch(formatedEndpoint, {
            code: code,
        });
    };
    JwtAuthProvider.prototype.resendVerification = function (endpoint, request) {
        var axiosClient = this.config.axiosClient;
        return axiosClient.post(endpoint, request);
    };
    return JwtAuthProvider;
}(core_1.BaseAuthProvider));
exports.JwtAuthProvider = JwtAuthProvider;
//# sourceMappingURL=index.js.map