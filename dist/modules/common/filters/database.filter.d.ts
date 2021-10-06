import { ArgumentsHost, ExceptionFilter } from '@nestjs/common';
import { NativeError } from 'mongoose';
import { ServerError } from '../errors/http.error';
export declare class DatabaseExceptionFilter implements ExceptionFilter {
    catch(error: NativeError, host: ArgumentsHost): ServerError;
}
