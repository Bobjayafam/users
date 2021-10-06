"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Protected = void 0;
const common_1 = require("@nestjs/common");
const auth_guards_1 = require("../../auth/guards/auth.guards");
function Protected() {
    return (0, common_1.applyDecorators)((0, common_1.UseGuards)(auth_guards_1.JwtAuthGuard));
}
exports.Protected = Protected;
//# sourceMappingURL=protected.decorator.js.map