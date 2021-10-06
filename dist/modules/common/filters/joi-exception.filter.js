"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JoiExceptionFilter = void 0;
const common_1 = require("@nestjs/common");
const joi_1 = __importDefault(require("joi"));
const lodash_1 = __importDefault(require("lodash"));
const error_codes_1 = require("../errors/error-codes");
const http_error_1 = require("../errors/http.error");
let JoiExceptionFilter = class JoiExceptionFilter {
    catch(error, host) {
        const res = host.switchToHttp().getResponse();
        const details = error.details.reduce((acc, err) => {
            return lodash_1.default.set(acc, err.path, err.message.replace(/"(\w+)"/g, '$1'));
        }, {});
        const err = new http_error_1.BadRequestError(error_codes_1.ErrorCodes.VALIDATION_FAILED, 'Validation failed', {
            details,
        });
        res.status(err.getStatus()).json(err.getResponse());
    }
};
JoiExceptionFilter = __decorate([
    (0, common_1.Catch)(joi_1.default.ValidationError)
], JoiExceptionFilter);
exports.JoiExceptionFilter = JoiExceptionFilter;
//# sourceMappingURL=joi-exception.filter.js.map