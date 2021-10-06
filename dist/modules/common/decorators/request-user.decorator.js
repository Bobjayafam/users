"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestUser = void 0;
const common_1 = require("@nestjs/common");
exports.RequestUser = (0, common_1.createParamDecorator)((field, ctx) => {
    const { user } = ctx.switchToHttp().getRequest();
    if (!user) {
        throw new Error('Route not authenticated');
    }
    return user;
});
//# sourceMappingURL=request-user.decorator.js.map