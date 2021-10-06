"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseExceptionFilter = void 0;
const common_1 = require("@nestjs/common");
const error_codes_1 = require("../errors/error-codes");
const http_error_1 = require("../errors/http.error");
let DatabaseExceptionFilter = class DatabaseExceptionFilter {
    catch(error, host) {
        return new http_error_1.ServerError(error_codes_1.ErrorCodes.SERVER_ERROR, 'Something happened, try again later');
    }
};
DatabaseExceptionFilter = __decorate([
    (0, common_1.Catch)(Error)
], DatabaseExceptionFilter);
exports.DatabaseExceptionFilter = DatabaseExceptionFilter;
//# sourceMappingURL=database.filter.js.map