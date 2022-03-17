/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { RoomEntity } from './room.entity';
import { RoomService } from './room.service';
import { RoomController } from './room.controller';
import { MessageService } from 'src/message/message.service';
import { MessageEntity } from 'src/message/message.entity';


@Module({
  imports: [TypeOrmModule.forFeature([RoomEntity, MessageEntity]), AuthModule],
  controllers: [RoomController],
  providers: [RoomService, MessageService],
  exports: [RoomService],
})
export class RoomModule {}
