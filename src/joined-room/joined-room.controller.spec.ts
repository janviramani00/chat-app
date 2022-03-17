import { Test, TestingModule } from '@nestjs/testing';
import { JoinedRoomController } from './joined-room.controller';

describe('JoinedRoomController', () => {
  let controller: JoinedRoomController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JoinedRoomController],
    }).compile();

    controller = module.get<JoinedRoomController>(JoinedRoomController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
