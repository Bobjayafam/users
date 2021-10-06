import { ConfigService } from '@nestjs/config';
import { Strategy } from 'passport-jwt';
import { IAppRequest } from '../../../types/request.type';
import { UserService } from '../../user/services/user.service';
import { IUser } from '../../user/user.type';
import { IJwtPayload } from '../auth.types';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private userService;
    constructor(configService: ConfigService, userService: UserService);
    validate(request: IAppRequest, payload: IJwtPayload): Promise<IUser>;
}
export {};
