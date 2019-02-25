import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { of } from 'rxjs';
import { HttpErrorHandler } from './http-error-handler.service';

import { CartService } from './cart.service';
import {mockData} from './cart.data';

class MockHttp {
  get() {
    return of([]);
  }
}

describe('ViewsService', () => {
  let service: CartService;
  let http: HttpClient;

  beforeEach(() => {
    const bed = TestBed.configureTestingModule({
      providers: [
        CartService,
        { provide: HttpClient, useClass: MockHttp },
        HttpErrorHandler,
      ],
    });
    http = bed.get(HttpClient);
    service = bed.get(CartService);
  });

  it('should be created', () => {
    service = TestBed.get(CartService);
    expect(service).toBeTruthy();
  });

  it('should get all products', () => {
    spyOn(http, 'get').and.returnValue(of({ default: { products: mockData.productsDetails } }));

    service.getProducts().subscribe(result => {
      expect(result).toEqual(mockData.productsDetails);
    });
  });
});
