import { UserService } from '../../user/services/user.service';
import { ILoginResponse, ISignUpDTO } from '../auth.types';
import { IUser } from '../../user/user.type';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    register(payload: ISignUpDTO): Promise<ILoginResponse>;
    login(email: string, password: string): Promise<ILoginResponse>;
    generateAccessToken(user: IUser): string;
}
