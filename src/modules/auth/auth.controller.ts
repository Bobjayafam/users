import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import Joi from 'joi';
import { ILoginDTO, ISignUpDTO } from './auth.types';
import {
  loginValidationSchema,
  registerValidationSchema,
} from './auth.validation';
import { AuthService } from './services/auth.service';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  @ApiOperation({ summary: 'Register User' })
  async register(@Body() payload: ISignUpDTO) {
    const result = await this.authService.register(
      await registerValidationSchema.validateAsync(payload, {
        abortEarly: false,
        stripUnknown: true,
      }),
    );

    return result;
  }

  @Post('login')
  @ApiOperation({ summary: 'Login User' })
  async login(@Body() payload: ILoginDTO) {
    const { email, password } = await loginValidationSchema.validateAsync(
      payload,
      {
        abortEarly: false,
        stripUnknown: true,
      },
    );
    const result = await this.authService.login(email, password);

    return result;
  }
}
