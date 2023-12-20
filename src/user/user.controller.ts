import { Controller, Get, Post, Query } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {
    // this.userService = new UserService()
  }
  @Get()
  getUsers(@Query('len') len: string): any {
    return this.userService.getUsers(len);
  }
  @Post()
  addUsers(): any {
    return this.userService.addUsers();
  }
}
