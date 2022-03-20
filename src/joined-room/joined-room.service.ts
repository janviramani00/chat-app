/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, switchMap } from 'rxjs';
import { JoinedRoomEntity } from 'src/joined-room/joined-room.entity';
import { JoinedRoomI } from 'src/joined-room/joined-room.interface';
import { RoomI } from 'src/room/room.interface';
import { UserI } from 'src/user/model/user.interface';
import { Repository } from 'typeorm';

@Injectable()
export class JoinedRoomService {
  constructor(
    @InjectRepository(JoinedRoomEntity)
    private readonly joinedRoomRepository: Repository<JoinedRoomEntity>,
  ) {}

  async create(joinedRoom: JoinedRoomI): Promise<JoinedRoomI> {
    return this.joinedRoomRepository.save(joinedRoom);
  }

  async findByUser(user: UserI): Promise<JoinedRoomI[]> {
    return this.joinedRoomRepository.find({ user });
  }

  async findByRoom(room: RoomI): Promise<JoinedRoomI[]> {
    return this.joinedRoomRepository.find({ room });
  }

  async findAll(room: JoinedRoomI): Promise<JoinedRoomI[]> {
    return this.joinedRoomRepository.find(room)
  }

  async res(id: number, user: JoinedRoomI): Promise<any>{
    delete user.user;
    delete user.room;
    delete user.user1

    
    user.status = "accept"
    return from(this.joinedRoomRepository.update(id, user)).pipe(
      switchMap(() => this.findOne(id)),
    );
    }

  async findOne(id: number): Promise<UserI> {
    return this.joinedRoomRepository.findOne({ id });
  }
  
}
