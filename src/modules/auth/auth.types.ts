import { ApiProperty } from '@nestjs/swagger';
import { IUser, TUserGender } from '../user/user.type';

export interface IJwtPayload {
  email: string;
  sub: string;
}

export class ISignUpDTO {
  @ApiProperty()
  firstName: string;
  @ApiProperty()
  lastName: string;
  @ApiProperty()
  gender: TUserGender;
  @ApiProperty()
  dob: Date;
  @ApiProperty()
  email: string;
  @ApiProperty()
  phone: string;
  @ApiProperty()
  password: string;
  @ApiProperty()
  nationality: string;
}

export interface ILoginResponse {
  user: IUser;
  accessToken: string;
}

export class ILoginDTO {
  @ApiProperty()
  email: string;
  @ApiProperty()
  password: string;
}
