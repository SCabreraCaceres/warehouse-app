import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Product } from '../product';
import { PRODUCTS } from '../mock-products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  private productsUrl = 'api/products';

  getProducts(): Product[] {
    // TODO uncomment to retrieve products from api 
    // return this.http.get<Product[]>(this.productsUrl); 
    return PRODUCTS;
  }

  private log(message: string) {
    console.log(message);
  }
}
