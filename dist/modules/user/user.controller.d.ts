/// <reference types="mongoose" />
import { UserService } from './services/user.service';
import { IQuery } from './user.type';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    verifyUser(id: string): Promise<{
        users: import("./user.type").IUser;
    }>;
    aggregate(): Promise<{
        aggregate: import("./user.type").IUserAggregate;
    }>;
    seedRandomUsers(): Promise<{
        message: string;
    }>;
    getUser(id: string): Promise<{
        user: import("./user.type").IUser & import("mongoose").Document<any, any, any> & {
            _id: any;
        };
    }>;
    getUsers(id: string, query: IQuery): Promise<{
        users: import("./user.type").IUser[];
    }>;
}
