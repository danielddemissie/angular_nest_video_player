import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClipService } from './service/clip/clip.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, ClipService],
})
export class AppModule {}
