import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {Product} from '../models/products.model';
import {HandleError, HttpErrorHandler} from './http-error-handler.service';


@Injectable({providedIn: 'root'})
export class CartService {
  private handleError: HandleError;
  constructor(private http: HttpClient, httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('CartViewService');
  }
  getProducts(): Observable<Product[]> {
    return this.http.get<any[]>('api/products')
        .pipe(
            map((resp: any) => resp.default.productsDetails),
            catchError(this.handleError('getProducts', [])));
  }
}
