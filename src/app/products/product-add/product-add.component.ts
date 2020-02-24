import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder, Validators} from '@angular/forms';
import {ProductsService} from '../../products.service';
import {Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  productForm;
  productTypes = ['torebka', 'koszyk', 'inne'];

  constructor(
    private productsService: ProductsService,
    private productsRouter: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,
    private location: Location) {
    this.productForm = this.formBuilder.group({
      name: ['', Validators.required],
      productType: ['', Validators.required],
      ropeSize: ['', Validators.compose([Validators.required, Validators.min(1)])],
      color: ['', Validators.compose([Validators.required, Validators.maxLength(1000)])],
      description: ['', Validators.required],
      imagePath: ['', Validators.required],
      videoPath: ['', Validators.required]
    });
  }

  ngOnInit() {
    console.log('init add component');
  }

  goBack(): void {
    this.location.back();
  }

  onAdd(newProduct): void {
    console.log(newProduct);
    this.productsService.postProductItem(newProduct)
      .subscribe(() => this.goBack());
  }
}
