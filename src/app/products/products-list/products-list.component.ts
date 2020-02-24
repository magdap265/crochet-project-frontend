import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Product} from '../../product.model';
import {ProductsService} from '../../products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  productsList: Product[];
  selected = false;

  constructor(private productsService: ProductsService) {
  }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this.productsService.getProducts()
      .subscribe(products => this.productsList = products);
  }
}
