import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../product.model';
import {ProductsService} from '../../products.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product-pattern',
  templateUrl: './product-pattern.component.html',
  styleUrls: ['./product-pattern.component.css']
})
export class ProductPatternComponent implements OnInit {
  selectedProduct: Product;

  constructor(
    private productsService: ProductsService,
    private productsRouter: ActivatedRoute) {
  }

  ngOnInit() {
    this.productsRouter.paramMap.subscribe(params => {
      this.productsService.getPatternByProductId(params.get('id'))
        .subscribe(product => {
          return this.selectedProduct = product;
        });
    });
  }

  sanitizeVideoPath(videoPath) {
    return this.productsService.sanitizeVideoPath(videoPath);
  }


}

