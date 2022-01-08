import { Body, Controller, Get, HttpCode, Param, Post } from '@nestjs/common';
import { CreateUserDto } from './dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getHello(): string {
    return this.userService.getHello();
  }

  @Get(':userId')
  getUser(@Param('userId') userId: string): string {
    return this.userService.getUser(userId);
  }

  @HttpCode(200)
  @Post()
  createUser(@Body() createUserBody: CreateUserDto) {
    return this.userService.createUser(createUserBody);
  }
}
