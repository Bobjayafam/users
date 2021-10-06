import { IUser, TUserGender } from '../user/user.type';
export interface IJwtPayload {
    email: string;
    sub: string;
}
export declare class ISignUpDTO {
    firstName: string;
    lastName: string;
    gender: TUserGender;
    dob: Date;
    email: string;
    phone: string;
    password: string;
    nationality: string;
}
export interface ILoginResponse {
    user: IUser;
    accessToken: string;
}
export declare class ILoginDTO {
    email: string;
    password: string;
}
