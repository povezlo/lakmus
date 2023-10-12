import { TestBed, inject } from '@angular/core/testing';
import { ApiClientService } from './api-client.services';
import { BASE_URL } from 'src/app/shared/injectTokens';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from 'src/environments/environment';

describe('ApiClientService', () => {
  let service: ApiClientService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ ApiClientService, { provide: BASE_URL, useValue: environment.baseURL }],
      imports: [HttpClientTestingModule],
    });

    service = TestBed.get(ApiClientService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('fetchAll$: should return a sorted list', () => {
    const mockData = {
      test: 'test',
    };

    service.get('test').subscribe((data) => {
      expect(data).toEqual(mockData);
    });

    const req = httpMock.expectOne(environment.baseURL + '/test');

    req.flush(mockData);
    httpMock.verify();
  });
});
