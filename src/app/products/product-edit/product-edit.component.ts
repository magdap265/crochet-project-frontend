import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Product } from 'src/app/product.model';
import { ProductsService} from '../../products.service';
import { Router } from "@angular/router"

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  selectedProduct: Product;
  editProduct: boolean;
  productList: Product[];
  productForm


  constructor( 
    private productsService: ProductsService,
    private productsRouter: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router) 
    {
      this.productForm = this.formBuilder.group({
        name: '',
        type: '',
        rSize: '',
        color: '',
        desc: ''
      })
    }

  ngOnInit() {
    this.selectedProduct = this.productsService.selectedProduct;
    this.editProduct = this.productsService.editProduct;
    this.productList = this.productsService.productsList;
    this.productsRouter.paramMap.subscribe(params => {
      this.selectedProduct = this.productList[params.get('id')]
    })
    if(this.selectedProduct) {
      this.productForm = this.formBuilder.group({
        name: this.selectedProduct.name,
        productType: this.selectedProduct.productType,
        ropeSize: this.selectedProduct.ropeSize,
        color: this.selectedProduct.color,
        description: this.selectedProduct.description
      })
    }
  }


  onSave(productData){
    this.router.navigate(['/product', this.selectedProduct["id"]]);
    this.productsService.onChangeProductData(this.selectedProduct.id, productData)

  }
}