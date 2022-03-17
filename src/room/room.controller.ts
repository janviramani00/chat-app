/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-types */
import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { catchError, map, Observable, of } from 'rxjs';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { MessageI } from 'src/message/message.interface';
import { UserI } from 'src/user/model/user.interface';
import { RoomI } from './room.interface';
import { RoomService } from './room.service';

@Controller('room')
export class RoomController {
  constructor(private roomService: RoomService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() room: RoomI): Promise<RoomI> {
    return this.roomService.createRoom(room);
  }

  @Get()
  async get(room: RoomI): Promise<RoomI[]> {
    return this.roomService.findAll(room);
  }
}
