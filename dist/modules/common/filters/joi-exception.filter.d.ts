import { ArgumentsHost, ExceptionFilter } from '@nestjs/common';
import Joi from 'joi';
export declare class JoiExceptionFilter implements ExceptionFilter {
    catch(error: Joi.ValidationError, host: ArgumentsHost): void;
}
