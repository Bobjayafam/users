"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsersQueryValidationSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.getUsersQueryValidationSchema = joi_1.default.object({
    page: joi_1.default.number().integer().positive().min(1).default(1),
    limit: joi_1.default.number().integer().positive().min(1).max(50).default(10),
});
//# sourceMappingURL=user.validation.js.map