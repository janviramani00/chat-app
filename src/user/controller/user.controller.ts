/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';

import { CreateUserDto } from '../model/dto/create-user.dto';
import { LoginUserDto } from '../model/dto/login-user.dto';
import { LoginResponseI } from '../model/login-response.interface';
import { UserI } from '../model/user.interface';
import { UserHelperService } from '../service/user-helper/user-helper.service';
import { UserService } from '../service/user-service/user.service';

@Controller('users')
export class UserController {
  constructor(
    private userService: UserService,
    private userHelperService: UserHelperService,
  ) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<UserI> {
    const userEntity: UserI =
      this.userHelperService.createUserDtoToEntity(createUserDto);
    return this.userService.create(userEntity);
  }

  
  @Get()
  async findAll(user: UserI): Promise<UserI[]> {
    
    return this.userService.findAll(user);
  }

  @Get('/find-by-username')
  async findAllByUsername(@Query('username') username: string) {
    return this.userService.findAllByUsername(username);
  }

  @Post('login')
  async login(@Body() loginUserDto: LoginUserDto): Promise<LoginResponseI> {
    const userEntity: UserI =
      this.userHelperService.loginUserDtoToEntity(loginUserDto);
    const jwt: string = await this.userService.login(userEntity);
    return {
      access_token: jwt,
      token_type: 'JWT',
      expires_in: 10000,
    };
  }

 

  @Post('forgetPassword')
  async forgetPassword(@Body() user: UserI): Promise<LoginResponseI>{
    const jwt: string = await this.userService.forgetPassword(user);
    return {
      access_token: jwt,
      token_type: 'JWT',
      expires_in: 10000,
    };
  }

  
  @Put('updatePassword/:id')
  async updatePassword(@Param('id') id: string, @Body() user: UserI): Promise<any> {
    return this.userService.updatePassword(Number(id), user);
  }

  @Post('logout')
  async logout(@Body() user: UserI): Promise<any>{
    let jwt: string = await this.userService.logout(user);
    return {
      access_token: jwt = "",
      msg: "logout succesfully"
    };
  }
}
