/* eslint-disable prettier/prettier */
import { JoinedRoomEntity } from 'src/joined-room/joined-room.entity';
import { MessageEntity } from 'src/message/message.entity';
import { RoomEntity } from 'src/room/room.entity';
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  username: string;

  @Column({ unique: true })
  email: string;

  @Column({ select: false })
  password: string;

  @ManyToMany(() => UserEntity, (user) => user.users)
  users: UserEntity[];

  @ManyToMany(() => RoomEntity, (room) => room.users)
  rooms: RoomEntity[];

 
  @OneToMany(() => JoinedRoomEntity, (joinedRoom) => joinedRoom.room)
  joinedRooms: JoinedRoomEntity[];

  @OneToMany(() => MessageEntity, (message) => message.user)
  messages: MessageEntity[];

  @BeforeInsert()
  @BeforeUpdate()
  emailToLowerCase() {
    this.email = this.email.toLowerCase();
    this.username = this.username.toLowerCase();
  }
}
