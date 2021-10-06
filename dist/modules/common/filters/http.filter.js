"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpExceptionFilter = void 0;
const common_1 = require("@nestjs/common");
const error_codes_1 = require("../errors/error-codes");
const http_error_1 = require("../errors/http.error");
let HttpExceptionFilter = class HttpExceptionFilter {
    catch(error, host) {
        const res = host.switchToHttp().getResponse();
        const err = error instanceof http_error_1.BaseHttpError
            ? error
            : error instanceof common_1.HttpException
                ? new http_error_1.NotFoundError(error_codes_1.ErrorCodes.RESOURCE_NOT_FOUND, error.message)
                : new http_error_1.ServerError(error_codes_1.ErrorCodes.SERVER_ERROR, 'Something went wrong, we are working on it');
        res.status(err.getStatus()).json(err.getResponse());
    }
};
HttpExceptionFilter = __decorate([
    (0, common_1.Catch)(http_error_1.BaseHttpError, common_1.HttpException)
], HttpExceptionFilter);
exports.HttpExceptionFilter = HttpExceptionFilter;
//# sourceMappingURL=http.filter.js.map