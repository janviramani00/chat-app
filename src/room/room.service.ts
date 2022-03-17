/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  IPaginationOptions,
  paginate,
  Pagination,
} from 'nestjs-typeorm-paginate';
import { MessageI } from 'src/message/message.interface';
import { MessageService } from 'src/message/message.service';
import { RoomEntity } from 'src/room/room.entity';
import { RoomI } from 'src/room/room.interface';
import { UserI } from 'src/user/model/user.interface';
import { Repository } from 'typeorm';

@Injectable()
export class RoomService {
  
  constructor(
    @InjectRepository(RoomEntity)
    private readonly roomRepository: Repository<RoomEntity>,
    private messageService: MessageService
  ) {}

  async createRoom(room: RoomI): Promise<RoomI> {
    const newRoom = await this.addCreatorToRoom(room);
    return this.roomRepository.save(newRoom);
  }

  async findAll(room: RoomI): Promise<RoomI[]> {
    return this.roomRepository.find(room)
  }

  

  async addCreatorToRoom(room: RoomI): Promise<RoomI> {
    return this.roomRepository.create(room)
  }
}
