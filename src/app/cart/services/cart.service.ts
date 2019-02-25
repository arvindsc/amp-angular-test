import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { HttpErrorHandler, HandleError } from "./http-error-handler.service";

import { Product } from '../models/products.model';

@Injectable({
  providedIn: "root"
})
export class CartService {
  private handleError: HandleError;
  constructor(private http: HttpClient, httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError("CartViewService");
  }
  getProducts(): Observable<Product[]>{
    return this.http.get<any[]>("api/products").pipe(
      map((resp: any) => resp.default.productsDetails),
      catchError(this.handleError("getProducts", []))
    );
  }

  getFilters(): Observable<any[]> {
    return this.http.get<any[]>("api/warrants").pipe(
      map((resp: any) => resp.default.filter),
      catchError(this.handleError("getFilters", []))
    );
  }
}
