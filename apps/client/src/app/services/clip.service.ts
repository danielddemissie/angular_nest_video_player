import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { APIResponse, API_URL } from '@pushit/api-interface';

@Injectable({
  providedIn: 'root',
})
export class ClipService {
  constructor(private httpClient: HttpClient) {}
  getApiResponse(): Observable<APIResponse> {
    return this.httpClient.get<APIResponse>(API_URL);
  }
}
