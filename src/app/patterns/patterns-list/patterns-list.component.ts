import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/products.service';
import { Product } from 'src/app/product.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-patterns-list',
  templateUrl: './patterns-list.component.html',
  styleUrls: ['./patterns-list.component.css']
})
export class PatternsListComponent implements OnInit {
  productsList: Product[];
  selectedProduct: Product;

  constructor(
    private productsService: ProductsService,
    private productsRouter: ActivatedRoute) { }

  ngOnInit() {
    this.productsList = this.productsService.productsList;
    this.selectedProduct = this.productsService.selectedProduct;
    // this.editProduct = this.productsService.editProduct;
    this.productsList = this.productsService.productsList;
    this.productsRouter.paramMap.subscribe(params => {
      this.selectedProduct = this.productsList[params.get('id')]
    })
  }

}
