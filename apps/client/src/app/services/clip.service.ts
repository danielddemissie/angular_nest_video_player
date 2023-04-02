import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  APIResponse,
  ApiURL,
  ApiClipURL,
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

  getClipList(): Observable<ApiClipResponse> {
    return this.httpClient.get<ApiClipResponse>(ApiClipURL);
  }
}
