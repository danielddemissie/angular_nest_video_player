import axios from 'axios';
import { Injectable } from '@nestjs/common';
import { ClipsURL, ApiClipResponse } from '@pushit/api-interface';

@Injectable()
export class ClipService {
  async getClips(): Promise<ApiClipResponse> {
    try {
      const headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
      };
      const data = new URLSearchParams({
        marAuth: '5344333591ebe3c10594e1abf146b309',
        sessionID: '399003',
      });
      const response = await axios.post(ClipsURL, data, {
        headers,
      });
      return { clips: response.data.clips };
    } catch (error) {
      throw new Error(error);
    }
  }
}
