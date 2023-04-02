import { Injectable } from '@nestjs/common';
import { APIResponse } from '@pushit/api-interface';

@Injectable()
export class AppService {
  getData(): APIResponse {
    return { message: 'Hello API' };
  }
}
