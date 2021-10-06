import { Model } from 'mongoose';
import { UserDocument } from '../user.schema';
import { ICreateUserDTO, IQuery, IUser, IUserAggregate } from '../user.type';
export declare class UserService {
    private userModel;
    constructor(userModel: Model<UserDocument>);
    create(payload: ICreateUserDTO): Promise<IUser>;
    seedRandomUsers(): Promise<void>;
    findOne(userId: string): Promise<IUser & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    verifyUser(email: string, password: string): Promise<IUser | false>;
    getUserAggregations(): Promise<IUserAggregate>;
    randomVerify(id: string): void;
    getUsers(query: IQuery): Promise<IUser[]>;
    requestVerification(id: string): Promise<IUser>;
}
