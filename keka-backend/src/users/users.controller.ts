import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './models/user.model';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post("signup")
  async signup(@Body() user: User){
    const existingUser = await this.usersService.findByEmail(user.email);
    if(existingUser){
      return { message: 'User with this email already exists' };
    }
    return this.usersService.createUser(user);
  }
}
