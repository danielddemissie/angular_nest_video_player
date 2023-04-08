import { registerAs } from '@nestjs/config';

export const configuration = registerAs('config', () => ({
  apiUrl: process.env.APP_API_URL,
  marAuth: process.env.APP_MAR_AUTH,
}));
