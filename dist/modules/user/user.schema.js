"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
const mongoose_1 = require("mongoose");
const user_type_1 = require("./user.type");
exports.UserSchema = new mongoose_1.Schema({
    id: String,
    gender: String,
    firstName: String,
    lastName: String,
    dob: Date,
    registered: Date,
    phone: String,
    email: String,
    password: {
        type: String,
        select: false,
    },
    nat: String,
    verificationStatus: {
        type: String,
        default: user_type_1.EUserVerificationStatus.UNVERIFIED,
    },
}, { id: false, versionKey: false });
//# sourceMappingURL=user.schema.js.map