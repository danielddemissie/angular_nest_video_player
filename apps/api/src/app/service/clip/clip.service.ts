import axios from 'axios';
import { Injectable } from '@nestjs/common';
import { ClipsURL, ApiClipResponse } from '@pushit/api-interface';

@Injectable()
export class ClipService {
  async getClips(
    page: string,
    limit: string,
    sortBy: 'id' | 'date' = 'date',
    sortDirection: 'asc' | 'desc' = 'desc',
    clipId: string
  ): Promise<ApiClipResponse> {
    try {
      const params = new URLSearchParams({
        marAuth: '5344333591ebe3c10594e1abf146b309',
        sessionID: '399003',
        clipId,
      });

      if (clipId) params.append('clipId', clipId);
      if (page) params.append('page', page);
      if (limit) params.append('limit', limit);
      if (sortBy) params.append('sortBy', sortBy);
      if (sortDirection) params.append('sortDirection', sortDirection);

      const response = await axios.post(ClipsURL, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        params,
      });
      return { clips: response.data.clips };
    } catch (error) {
      throw new Error(error);
    }
  }
}
