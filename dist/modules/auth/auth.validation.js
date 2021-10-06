"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginValidationSchema = exports.registerValidationSchema = void 0;
const date_fns_1 = require("date-fns");
const joi_1 = __importDefault(require("joi"));
exports.registerValidationSchema = joi_1.default.object({
    firstName: joi_1.default.string().max(200).required(),
    lastName: joi_1.default.string().max(200).required(),
    gender: joi_1.default.string().valid('male', 'female', 'other').required(),
    dob: joi_1.default.date().less((0, date_fns_1.startOfToday)()).required(),
    email: joi_1.default.string().email().required(),
    phone: joi_1.default.string().required(),
    password: joi_1.default.string().min(8).required(),
    nationality: joi_1.default.string().max(4).uppercase().required(),
});
exports.loginValidationSchema = joi_1.default.object({
    email: joi_1.default.string().email().required(),
    password: joi_1.default.string().min(8).required(),
});
//# sourceMappingURL=auth.validation.js.map