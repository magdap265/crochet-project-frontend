import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { ProductsService } from 'src/app/products.service';
import { Product } from 'src/app/product.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-patterns-item',
  templateUrl: './patterns-item.component.html',
  styleUrls: ['./patterns-item.component.css']
})
export class PatternsItemComponent implements OnInit {
  @Input() product: Product;
  selectedProduct: Product;
  constructor( 
    private productsService: ProductsService, 
    private sanitizer: DomSanitizer,
    private productsRouter: ActivatedRoute) { }

  ngOnInit() {
    this.selectedProduct = this.productsService.selectedProduct;
  }

  sanitizeVideoPath(videoPath) {
    let fixedUrl = videoPath.replace("watch?v=", "embed/");
    return this.sanitizer.bypassSecurityTrustResourceUrl(fixedUrl)
  }
}
