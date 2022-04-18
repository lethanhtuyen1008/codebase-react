"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.util = exports.Util = void 0;
var Util = /** @class */ (function () {
    function Util() {
    }
    Util.prototype.formatString = function (value, variables) {
        if (!value) {
            return '';
        }
        return value.replace(/(\{\w+\})|(:\w+)/g, function (match) {
            return variables[match.replace(/\{|\}|:/g, '')] || '';
        });
    };
    return Util;
}());
exports.Util = Util;
exports.util = new Util();
//# sourceMappingURL=utils.js.map