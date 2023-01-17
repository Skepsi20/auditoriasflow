import { TestBed } from '@angular/core/testing';

import { BbsFormQuestionsService } from './bbs-form-questions.service';

describe('BbsFormQuestionsService', () => {
  let service: BbsFormQuestionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BbsFormQuestionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
