import { TestBed, inject } from '@angular/core/testing';
import { ApiClientService } from './api-client.services';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from 'src/environments/environment';

describe('ApiClientService', () => {
  let service: ApiClientService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ ApiClientService],
      imports: [HttpClientTestingModule],
    });

    service = TestBed.inject(ApiClientService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it.skip('fetchAll$: should return a sorted list', () => {
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
