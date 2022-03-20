import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { RoomI } from 'src/room/room.interface';
import { UserI } from 'src/user/model/user.interface';
import { JoinedRoomI } from './joined-room.interface';
import { JoinedRoomService } from './joined-room.service';

@Controller('joined-room')
export class JoinedRoomController {
  constructor(private joinedroomService: JoinedRoomService) {}

  @Post()
  async create(@Body() joinedroom: JoinedRoomI): Promise<JoinedRoomI> {
    return this.joinedroomService.create(joinedroom);
  }

  @Get('/find-by-user')
  async findByUser(@Query('user') user: UserI) {
    return this.joinedroomService.findByUser(user);
  }

  @Get('/find-by-room')
  async findByRoom(@Query('room') room: RoomI) {
    return this.joinedroomService.findByRoom(room);
  }

  @Put('res/:id')
  async res(@Param('id') id: string, @Body() user: JoinedRoomI): Promise<any> {
    return this.joinedroomService.res(Number(id), user);
  }
}
