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
import { MessageEntity } from 'src/message/message.entity';
import { MessageI } from 'src/message/message.interface';
import { RoomEntity } from 'src/room/room.entity';
import { RoomI } from 'src/room/room.interface';
import { UserEntity } from 'src/user/model/user.entity';
import { UserI } from 'src/user/model/user.interface';
import { Repository } from 'typeorm';

@Injectable()
export class MessageService {
  constructor(
    @InjectRepository(MessageEntity)
    private readonly messageRepository: Repository<MessageEntity>,
    
  ) {}

  async create(message: MessageI): Promise<MessageI> {
    return this.messageRepository.save(message);
  }
  
}
