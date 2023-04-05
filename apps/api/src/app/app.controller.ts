import {
  Controller,
  Get,
  Query,
  Param,
  CACHE_MANAGER,
  Inject,
} from '@nestjs/common';
import { ClipService } from './service/clip/clip.service';
import { ApiClipResponse } from '@pushit/api-interface';
import { Cache } from 'cache-manager';

@Controller('/clips')
export class AppController {
  constructor(
    private readonly clipService: ClipService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache
  ) {}

  @Get(':clipId?')
  async getClips(
    @Query('page') page: string,
    @Query('limit') limit: string,
    @Query('sortBy') sortBy: 'id' | 'date' = 'date',
    @Query('sortDirection') sortDirection: 'asc' | 'desc' = 'desc',
    @Param('clipId') clipId: string
  ) {
    const cacheKey = `clips-${page}-${limit}`;
    const cachedVideos = await this.cacheManager.get(cacheKey);
    if (cachedVideos) return cachedVideos;

    const videos = await this.clipService.getClips(
      page,
      limit,
      sortBy,
      sortDirection,
      clipId
    );
    await this.cacheManager.set(cacheKey, { clips: videos.clips });
    return Promise.resolve<ApiClipResponse>(videos);
  }
}
