export interface APIResponse {
  message: string;
}

export interface ApiClipResponse {
  clips: Clip[];
}

export const ApiURL = '/api';
export const ApiClipURL = '/api/clips';
export const ClipsURL = 'http://www.myactionreplay.com/api/clips';

export interface Clip {
  clipId: number;
  clipName: string;
  clipURL: string;
  clipThumb: string;
  faved: boolean;
  claimed: boolean;
  siteName: string;
  marGroup: string;
  clipDate: string;
  clipTitle: string;
  marSessionID: number;
  tags: string;
}
