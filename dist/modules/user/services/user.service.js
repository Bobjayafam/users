"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const bcrypt_1 = __importDefault(require("bcrypt"));
const date_fns_1 = require("date-fns");
const got_1 = __importDefault(require("got"));
const mongoose_2 = require("mongoose");
const uuid_1 = require("uuid");
const error_codes_1 = require("../../common/errors/error-codes");
const http_error_1 = require("../../common/errors/http.error");
const user_type_1 = require("../user.type");
const lodash_1 = require("lodash");
let UserService = class UserService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    async create(payload) {
        const existingUser = await this.userModel.findOne({ email: payload.email });
        if (existingUser) {
            throw new http_error_1.ConflictError(error_codes_1.ErrorCodes.USER_ALREADY_EXISTS, 'User with email already exists');
        }
        const user = new this.userModel(Object.assign(Object.assign({ id: (0, uuid_1.v4)() }, payload), { registered: new Date() }));
        await user.save();
        user.password = undefined;
        return user;
    }
    async seedRandomUsers() {
        const randomUsers = await got_1.default.get('https://randomuser.me/api/', { searchParams: { results: 5000 }, responseType: 'json' });
        await this.userModel.insertMany(randomUsers.body.results.map((user) => ({
            id: user.login.uuid,
            firstName: user.name.first,
            lastName: user.name.last,
            dob: user.dob.date,
            registered: user.registered.date,
            gender: user.gender,
            phone: user.phone,
            email: user.email,
            nat: user.nat,
            password: bcrypt_1.default.hashSync(user.login.password, 5),
        })));
    }
    async findOne(userId) {
        const user = await this.userModel.findOne({ id: userId });
        if (!user) {
            throw new http_error_1.NotFoundError(error_codes_1.ErrorCodes.USER_NOT_FOUND, 'User not found');
        }
        return user;
    }
    async verifyUser(email, password) {
        const user = await this.userModel.findOne({ email }).select('+password');
        if (!user) {
            throw new http_error_1.NotFoundError(error_codes_1.ErrorCodes.USER_NOT_FOUND, 'User not found');
        }
        if (!bcrypt_1.default.compareSync(password, user.password)) {
            return false;
        }
        user.password = undefined;
        return user;
    }
    async getUserAggregations() {
        var _a, _b, _c;
        const aggregate = {
            total: 0,
            gender: {
                male: 0,
                female: 0,
                other: 0,
            },
            age: {},
            nat: {},
            verificationStatus: {},
        };
        const cursor = this.userModel.aggregate().cursor();
        for (let doc = (await cursor.next()); doc != null; doc = await cursor.next()) {
            aggregate.total += 1;
            aggregate.gender[doc.gender] += 1;
            aggregate.nat[doc.nat] = ((_a = aggregate.nat[doc.nat]) !== null && _a !== void 0 ? _a : 0) + 1;
            aggregate.verificationStatus[doc.verificationStatus] =
                ((_b = aggregate.verificationStatus[doc.verificationStatus]) !== null && _b !== void 0 ? _b : 0) + 1;
            const ageGroup = `${Math.floor((0, date_fns_1.differenceInYears)(new Date(), doc.dob) / 10) * 10}`;
            aggregate.age[ageGroup] = ((_c = aggregate.age[ageGroup]) !== null && _c !== void 0 ? _c : 0) + 1;
        }
        return aggregate;
    }
    randomVerify(id) {
        const verificationStatus = (0, lodash_1.random)(1, 10) >= 5
            ? user_type_1.EUserVerificationStatus.VERIFIED
            : user_type_1.EUserVerificationStatus.REJECTED;
        setTimeout(() => {
            this.userModel.updateOne({ id: id }, { verificationStatus }).catch(() => {
                this.userModel.updateOne({ id: id }, { verificationStatus: user_type_1.EUserVerificationStatus.UNVERIFIED });
            });
        }, 10000);
    }
    async getUsers(query) {
        const users = await this.userModel
            .find()
            .skip((query.page - 1) * query.limit)
            .limit(query.limit)
            .sort('-registered');
        return users;
    }
    async requestVerification(id) {
        const user = await this.userModel.findOne({ id: id });
        if (!user) {
            throw new http_error_1.NotFoundError(error_codes_1.ErrorCodes.USER_NOT_FOUND, 'User not found');
        }
        if (user.verificationStatus !== user_type_1.EUserVerificationStatus.UNVERIFIED) {
            throw new http_error_1.ConflictError(error_codes_1.ErrorCodes.USER_ALREADY_REVIEWED, 'User has already been reviewed');
        }
        user.verificationStatus = user_type_1.EUserVerificationStatus.PENDING;
        await user.save();
        this.randomVerify(user.id);
        return user;
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('User')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map