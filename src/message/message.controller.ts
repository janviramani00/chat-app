import { Body, Controller, Post } from '@nestjs/common';

import { MessageI } from './message.interface';
import { MessageService } from './message.service';

@Controller('message')
export class MessageController {
  constructor(private messageService: MessageService) {}

  @Post()
  async create(@Body() message: MessageI): Promise<MessageI> {
    return this.messageService.create(message);
  }
}
