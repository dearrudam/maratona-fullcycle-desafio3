import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RandomNameService } from './random-name.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports:[],
      controllers: [AppController],
      providers: [AppService, RandomNameService],
    }).compile();
    appController = app.get<AppController>(AppController);
  });

  describe('/maratona', () => {

    const regex =
      `Hello ${
      RandomNameService
        .avaliableNames
        .reduce((a, b) => {
          return `${a}${a ? '|' : ''}${b}`;
        }, "")}`;

    it(`should return \"${regex}\"`, () => {
      expect(appController.getHello()).toMatch(new RegExp(regex, 'g'));
    });
  });
});
