import { Module, CacheModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClipService } from './service/clip/clip.service';
import * as Storage from 'cache-manager-fs-hash';
import { ConfigModule } from '@nestjs/config';
import { configuration } from '../config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    CacheModule.register({
      store: Storage,
      options: {
        ttl: 60 * 60,
        maxsize: 1000 * 1000 * 1000,
        path: './cache',
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService, ClipService],
})
export class AppModule {}
