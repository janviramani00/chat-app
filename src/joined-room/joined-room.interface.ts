/* eslint-disable prettier/prettier */
import { UserI } from 'src/user/model/user.interface';
import { RoomI } from '../room/room.interface';

export interface JoinedRoomI {
  id?: number;
  user: UserI;
  user1: UserI;
  room: RoomI;
  status: string;
}
