import { Injectable } from '@nestjs/common';
import { RandomNameService } from './random-name.service';

@Injectable()
export class AppService {

  constructor(private randomNameService: RandomNameService) { }

  getHello(): string {
    return `Hello ${this.randomNameService.getRandomName()}`;
  }
  
}
