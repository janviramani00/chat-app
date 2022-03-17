import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { MessageModule } from './message/message.module';
import { JoinedRoomController } from './joined-room/joined-room.controller';
import { JoinedRoomModule } from './joined-room/joined-room.module';
import { RoomModule } from './room/room.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      username: 'root',
      password: '9512760660',
      database: 'chat',
      autoLoadEntities: true,
      synchronize: true,
      logging: true,
    }),
    UserModule,
    AuthModule,
    RoomModule,
    MessageModule,
    JoinedRoomModule,
  ],
  controllers: [AppController, JoinedRoomController],
  providers: [AppService],
})
export class AppModule {}
