import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Product } from '../../product.model';
import { ProductsService} from '../../products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  productsList: Product[]; 
  selectedProduct: Product;
  constructor( private productsService: ProductsService ) { }

  ngOnInit() {
    this.productsList = this.productsService.productsList;
  }

  ngDoCheck(){
    this.selectedProduct = this.productsService.selectedProduct;
  }

}
