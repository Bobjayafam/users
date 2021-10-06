import { ArgumentsHost, ExceptionFilter, HttpException } from '@nestjs/common';
import { BaseHttpError } from '../errors/http.error';
export declare class HttpExceptionFilter implements ExceptionFilter {
    catch(error: BaseHttpError | HttpException, host: ArgumentsHost): void;
}
