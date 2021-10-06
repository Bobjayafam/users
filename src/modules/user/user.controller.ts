import { Controller, Get, Param, Patch, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Protected } from '../common/decorators/protected.decorator';
import { UserService } from './services/user.service';
import { IQuery } from './user.type';
import { getUsersQueryValidationSchema } from './user.validation';

@ApiBearerAuth()
@ApiTags('user')
@Controller('user')
@Protected()
export class UserController {
  constructor(private userService: UserService) {}

  @Patch(':id/verify')
  async verifyUser(@Param('id') id: string) {
    const users = await this.userService.requestVerification(id);

    return { users };
  }

  @Get('aggregate')
  async aggregate() {
    const aggregate = await this.userService.getUserAggregations();

    return { aggregate };
  }

  
  @Get('seed')
  async seedRandomUsers() {

    const users = await this.userService.seedRandomUsers();

    return { message: 'Successfully seeded 5000 users' };
  }

  @Get(':id')
  async getUser(@Param('id') id: string) {
    const user = await this.userService.findOne(id);

    return { user };
  }

  @Get('')
  async getUsers(@Param('id') id: string, @Query() query: IQuery) {
    const q = await getUsersQueryValidationSchema.validateAsync(query);

    const users = await this.userService.getUsers(q);

    return { users };
  }

}
