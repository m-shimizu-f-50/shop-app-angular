import { Component } from '@angular/core';
import { products } from 'src/app/product';
import type { Product } from 'src/app/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  products: Product[] = [];

  ngOnInit() {
    this.products = products;
  }
}
