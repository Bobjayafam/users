import { HttpException } from '@nestjs/common';
import { ErrorCodes } from './error-codes';
export declare class BaseHttpError extends HttpException {
    error?: any;
    code: string;
    constructor(message: string, status: number, code: ErrorCodes, error?: any);
    getResponse(): {
        error: any;
        message: string;
    };
}
export declare class NotFoundError extends BaseHttpError {
    constructor(code: ErrorCodes, message?: string, error?: any);
}
export declare class ConflictError extends BaseHttpError {
    constructor(code: ErrorCodes, message?: string, error?: any);
}
export declare class UnauthorizedError extends BaseHttpError {
    constructor(code: ErrorCodes, message?: string, error?: any);
}
export declare class ForbiddenError extends BaseHttpError {
    constructor(code: ErrorCodes, message?: string, error?: any);
}
export declare class BadRequestError extends BaseHttpError {
    constructor(code: ErrorCodes, message?: string, error?: any);
}
export declare class NotAllowedError extends BaseHttpError {
    constructor(code: ErrorCodes, message?: string, error?: any);
}
export declare class ServerError extends BaseHttpError {
    constructor(code: ErrorCodes, message?: string, error?: any);
}
