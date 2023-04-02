import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  APIResponse,
  ApiURL,
  ApiClipURL,
  ApiClipOptions,
  ApiClipResponse,
} from '@pushit/api-interface';

@Injectable({
  providedIn: 'root',
})
export class ClipService {
  constructor(private httpClient: HttpClient) {}
  getApiResponse(): Observable<APIResponse> {
    return this.httpClient.get<APIResponse>(ApiURL);
  }

  getClipList(
    page: number = 1,
    limit: number = 10,
    clipId: string = ''
  ): Observable<ApiClipResponse> {
    const params: ApiClipOptions = {};
    return this.httpClient.get<ApiClipResponse>(`${ApiClipURL}/${clipId}`, {
      params: {
        page: page,
        limit: limit,
      },
    });
  }
}
