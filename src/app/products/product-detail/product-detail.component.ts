import {Component, OnInit} from '@angular/core';
import {Product} from '../../product.model';
import {Comment} from '../../comment.model';
import {ProductsService} from '../../products.service';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  selectedProduct: Product;
  selectedProductComments: Comment[];

  constructor(
    private productsService: ProductsService,
    private productsRouter: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {
    this.productsRouter.paramMap.subscribe(params => {
      if (params.get('id')) {
        this.productsService.getProductItem(params.get('id'))
          .subscribe(product => this.selectedProduct = product);
        this.productsService.getCommentsByProductId(params.get('id'))
          .subscribe(comments => {
            this.selectedProductComments = comments;
          });
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/products']);
  }

  onDelete(id): void {
    this.productsService.deleteProductItem(id)
      .subscribe(() => this.goBack());
  }
}
