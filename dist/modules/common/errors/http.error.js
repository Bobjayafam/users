"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerError = exports.NotAllowedError = exports.BadRequestError = exports.ForbiddenError = exports.UnauthorizedError = exports.ConflictError = exports.NotFoundError = exports.BaseHttpError = void 0;
const common_1 = require("@nestjs/common");
class BaseHttpError extends common_1.HttpException {
    constructor(message, status, code, error) {
        super({ message, error }, status);
        this.code = code;
        this.error = error;
    }
    getResponse() {
        return {
            error: this.error,
            message: this.message,
        };
    }
}
exports.BaseHttpError = BaseHttpError;
class NotFoundError extends BaseHttpError {
    constructor(code, message = 'Not found', error) {
        super(message, common_1.HttpStatus.NOT_FOUND, code, error);
    }
}
exports.NotFoundError = NotFoundError;
class ConflictError extends BaseHttpError {
    constructor(code, message = 'Conflict', error) {
        super(message, common_1.HttpStatus.CONFLICT, code, error);
    }
}
exports.ConflictError = ConflictError;
class UnauthorizedError extends BaseHttpError {
    constructor(code, message = 'Not authorized', error) {
        super(message, common_1.HttpStatus.UNAUTHORIZED, code, error);
    }
}
exports.UnauthorizedError = UnauthorizedError;
class ForbiddenError extends BaseHttpError {
    constructor(code, message = 'Forbidden', error) {
        super(message, common_1.HttpStatus.FORBIDDEN, code, error);
    }
}
exports.ForbiddenError = ForbiddenError;
class BadRequestError extends BaseHttpError {
    constructor(code, message = 'Bad request', error) {
        super(message, common_1.HttpStatus.BAD_REQUEST, code, error);
    }
}
exports.BadRequestError = BadRequestError;
class NotAllowedError extends BaseHttpError {
    constructor(code, message = 'Method not allowed', error) {
        super(message, common_1.HttpStatus.METHOD_NOT_ALLOWED, code, error);
    }
}
exports.NotAllowedError = NotAllowedError;
class ServerError extends BaseHttpError {
    constructor(code, message = 'Server error', error) {
        super(message, common_1.HttpStatus.INTERNAL_SERVER_ERROR, code, error);
    }
}
exports.ServerError = ServerError;
//# sourceMappingURL=http.error.js.map