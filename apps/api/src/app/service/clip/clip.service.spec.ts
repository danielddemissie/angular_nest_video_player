import { Test, TestingModule } from '@nestjs/testing';
import { ClipService } from './clip.service';

describe('ClipService', () => {
  let service: ClipService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClipService],
    }).compile();

    service = module.get<ClipService>(ClipService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
