"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cookieProvider = void 0;
var CookieProvider = /** @class */ (function () {
    function CookieProvider() {
    }
    CookieProvider.prototype.set = function (key, value, timeoutInMinutes) {
        if (timeoutInMinutes === void 0) { timeoutInMinutes = 60; }
        var time = Date.now() + timeoutInMinutes * 60 * 1000;
        var expirationTime = new Date(time);
        document.cookie = key + "=" + value + ";expires=" + expirationTime.toUTCString();
    };
    CookieProvider.prototype.get = function (key, defaultValue) {
        var match = document.cookie.match(new RegExp('(^| )' + key + '=([^;]+)'));
        if (match) {
            return match[2];
        }
        return defaultValue || '';
    };
    CookieProvider.prototype.has = function (key) {
        return !!this.get(key);
    };
    CookieProvider.prototype.delete = function (key) {
        this.set(key, '', -1000);
    };
    CookieProvider.prototype.multiDelete = function (keys) {
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            this.delete(key);
        }
    };
    CookieProvider.prototype.updateExpirationTime = function (key, value, timeoutInMinutes) {
        if (timeoutInMinutes === void 0) { timeoutInMinutes = 60; }
        this.set(key, value, timeoutInMinutes);
    };
    return CookieProvider;
}());
exports.cookieProvider = new CookieProvider();
//# sourceMappingURL=cookieProvider.js.map