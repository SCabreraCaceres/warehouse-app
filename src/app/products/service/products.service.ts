import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { Product } from '../product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  private url = 'http://localhost:8080/v1/warehouse/products';

  getProducts(): Observable<Product[]> {
      return this.http.get<Product[]>(this.url);
  }

}
