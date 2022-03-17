/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { UserEntity } from 'src/user/model/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { RoomEntity } from '../room/room.entity';

@Entity()
export class JoinedRoomEntity {
  @PrimaryGeneratedColumn()
  id: number;

  
  @ManyToOne(() => UserEntity, (user) => user.joinedRooms)
  @JoinColumn()
  user: UserEntity;

  @ManyToOne(() => RoomEntity, (room) => room.joinedUsers)
  @JoinColumn()
  room: RoomEntity;
}
