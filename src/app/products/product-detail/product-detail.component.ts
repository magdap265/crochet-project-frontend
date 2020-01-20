import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from '../../product.model';
import { ProductsService} from '../../products.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit, OnDestroy{
  selectedProduct: Product;
  productsList: Product[];

  constructor( 
    private productsService: ProductsService,
    private productsRouter: ActivatedRoute) { }

  // onEdit(){
  //   this.productsService.onEdit();
  // }

  ngOnInit() {
    this.productsList = this.productsService.productsList;
    this.productsRouter.paramMap.subscribe(params => {
      this.selectedProduct = this.productsList[params.get('id')]
      
    })
  }

  ngOnDestroy(){
    this.selectedProduct = new Product(null,null,null,null,null,null,null,null);
  }
}
