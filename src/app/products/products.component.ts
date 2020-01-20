import { Component, OnInit, DoCheck, AfterContentInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductsService} from '../products.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, AfterContentInit {
  selectedProduct: Product;
  editProduct: boolean;

  constructor( private productsService: ProductsService ) { }

  ngOnInit() { }

  ngAfterContentInit(){
    this.selectedProduct = this.productsService.selectedProduct;
    this.editProduct = this.productsService.editProduct;
  }
}
