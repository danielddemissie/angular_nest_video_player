import { Controller, Get, Query, Param } from '@nestjs/common';
import { ClipService } from './service/clip/clip.service';

@Controller('/clips')
export class AppController {
  constructor(private readonly clipService: ClipService) {}

  @Get(':clipId?')
  getClips(
    @Query('page') page: string,
    @Query('limit') limit: string,
    @Query('sortBy') sortBy: 'id' | 'date' = 'date',
    @Query('sortDirection') sortDirection: 'asc' | 'desc' = 'desc',
    @Param('clipId') clipId: string
  ) {
    return this.clipService.getClips(
      page,
      limit,
      sortBy,
      sortDirection,
      clipId
    );
  }
}
