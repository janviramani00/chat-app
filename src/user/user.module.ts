/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { MessageController } from 'src/message/message.controller';
import { MessageEntity } from 'src/message/message.entity';
import { MessageModule } from 'src/message/message.module';
import { MessageService } from 'src/message/message.service';
import { UserController } from './controller/user.controller';
import { UserEntity } from './model/user.entity';
import { UserHelperService } from './service/user-helper/user-helper.service';
import { UserService } from './service/user-service/user.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, MessageEntity]), AuthModule, MessageModule],
  controllers: [UserController, MessageController],
  providers: [UserService, UserHelperService, MessageService],
  exports: [UserService],
})
export class UserModule {}
