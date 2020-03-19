import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RandomNameService } from './random-name.service';
@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, RandomNameService],
})
export class AppModule { }
