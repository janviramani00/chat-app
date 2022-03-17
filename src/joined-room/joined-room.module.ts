import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { JoinedRoomController } from './joined-room.controller';
import { JoinedRoomEntity } from './joined-room.entity';
import { JoinedRoomService } from './joined-room.service';

@Module({
  imports: [TypeOrmModule.forFeature([JoinedRoomEntity]), AuthModule],
  controllers: [JoinedRoomController],
  providers: [JoinedRoomService],
  exports: [JoinedRoomService],
})
export class JoinedRoomModule {}
