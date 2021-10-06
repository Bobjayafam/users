import { Document, Schema } from 'mongoose';
import { IUser } from './user.type';
export declare type UserDocument = IUser & Document;
export declare const UserSchema: Schema<IUser, import("mongoose").Model<IUser, any, any, any>, {}>;
