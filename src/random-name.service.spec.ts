import { Test, TestingModule } from '@nestjs/testing';
import { RandomNameService } from './random-name.service';

describe('RandomNameService', () => {
  let service: RandomNameService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RandomNameService],
    }).compile();

    service = module.get<RandomNameService>(RandomNameService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should retrieve a expected random name', () => {
    
    const randomName = service.getRandomName();
    expect(randomName).toBeTruthy();
    expect(RandomNameService.avaliableNames.filter(name => name === randomName).length).toBeGreaterThan(0);
  
  });
});
