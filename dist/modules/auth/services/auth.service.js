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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("../../user/services/user.service");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jwt_1 = require("@nestjs/jwt");
const error_codes_1 = require("../../common/errors/error-codes");
const http_error_1 = require("../../common/errors/http.error");
let AuthService = class AuthService {
    constructor(userService, jwtService) {
        this.userService = userService;
        this.jwtService = jwtService;
    }
    async register(payload) {
        const user = await this.userService.create({
            firstName: payload.firstName,
            lastName: payload.lastName,
            dob: payload.dob,
            gender: payload.gender,
            phone: payload.phone,
            email: payload.email,
            password: bcrypt_1.default.hashSync(payload.password, 5),
            nat: payload.nationality,
        });
        return { user, accessToken: this.generateAccessToken(user) };
    }
    async login(email, password) {
        const user = await this.userService.verifyUser(email, password);
        if (!user) {
            throw new http_error_1.UnauthorizedError(error_codes_1.ErrorCodes.INCORRECT_LOGIN_CREDENTIALS, 'Email or password incorrect');
        }
        return { user, accessToken: this.generateAccessToken(user) };
    }
    generateAccessToken(user) {
        const accessToken = this.jwtService.sign({ email: user.email }, { subject: user.id });
        return accessToken;
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.UserService,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map