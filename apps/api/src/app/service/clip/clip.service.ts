import axios from 'axios';
import { Injectable } from '@nestjs/common';
import { ApiClipResponse } from '@pushit/api-interface';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ClipService {
  constructor(private configService: ConfigService) {}
  async getClips(
    page: string,
    limit: string,
    sortBy: 'id' | 'date' = 'date',
    sortDirection: 'asc' | 'desc' = 'desc',
    clipId?: string
  ): Promise<ApiClipResponse> {
    try {
      const data = new URLSearchParams({
        marAuth: this.configService.get('config.marAuth'),
      });

      if (clipId) data.append('clipId', clipId);
      if (page) data.append('page', page);
      if (limit) data.append('limit', limit);
      if (sortBy) data.append('sortBy', sortBy);
      if (sortDirection) data.append('sortDirection', sortDirection);

      const response = await axios.post(
        this.configService.get('config.apiUrl'),
        data,
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      );
      return this.formatClips(response.data, sortBy, sortDirection);
    } catch (error) {
      throw new Error(error);
    }
  }

  formatClips(
    response: ApiClipResponse,
    sortBy: 'id' | 'date' = 'date',
    sortDirection: 'asc' | 'desc' = 'desc'
  ): ApiClipResponse {
    const formattedClips = response.clips;
    if (sortBy === 'date') {
      if (sortDirection === 'asc') {
        formattedClips.sort((a, b) => {
          return (
            new Date(a.clipDate).getTime() - new Date(b.clipDate).getTime()
          );
        });
      } else {
        formattedClips.sort((a, b) => {
          return (
            new Date(b.clipDate).getTime() - new Date(a.clipDate).getTime()
          );
        });
      }
    } else {
      if (sortDirection === 'asc') {
        formattedClips.sort((a, b) => {
          return a.clipId - b.clipId;
        });
      } else {
        formattedClips.sort((a, b) => {
          return b.clipId - a.clipId;
        });
      }
    }

    return { clips: formattedClips };
  }
}
