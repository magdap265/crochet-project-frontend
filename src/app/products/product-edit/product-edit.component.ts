import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {Product} from 'src/app/product.model';
import {ProductsService} from '../../products.service';
import {Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  selectedProduct: Product;
  productForm;
  productTypes = ['torebka', 'koszyk', 'inne'];

  constructor(
    private productsService: ProductsService,
    private productsRouter: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,
    private location: Location) {
    this.productForm = this.formBuilder.group({
      name: [new FormControl(''), Validators.required],
      productType: [new FormControl(''), Validators.required],
      ropeSize: [new FormControl(''), Validators.compose([Validators.required, Validators.min(1)])],
      color: [new FormControl(''), Validators.required],
      description: [new FormControl(''), Validators.required],
      imagePath: [new FormControl(''), Validators.required],
      videoPath: [new FormControl(''), Validators.required]
    });
  }

  ngOnInit() {
    this.productsRouter.paramMap.subscribe(params => {
      this.productsService.getProductItem(params.get('id'))
        .subscribe(product => {
          return this.selectedProduct = product;
        });
    });
  }

  goBack(): void {
    this.location.back();
  }

  onSave(productData): void {
    this.productsService.putProductItem(productData, this.selectedProduct)
      .subscribe(() => this.goBack());
  }
}
