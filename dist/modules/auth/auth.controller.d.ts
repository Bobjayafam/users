import { ILoginDTO, ISignUpDTO } from './auth.types';
import { AuthService } from './services/auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    register(payload: ISignUpDTO): Promise<import("./auth.types").ILoginResponse>;
    login(payload: ILoginDTO): Promise<import("./auth.types").ILoginResponse>;
}
