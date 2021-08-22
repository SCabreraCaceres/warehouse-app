import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductsService } from './service/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this.productsService.getProducts().subscribe(
      
      (products) => {
        console.log(products);
        this.products = products
      });
  }
  sell(product: Product): void {
    
  }

}
