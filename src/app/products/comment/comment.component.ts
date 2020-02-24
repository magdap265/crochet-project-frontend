import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProductsService} from 'src/app/products.service';
import {Product} from '../../product.model';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  commentForm: FormGroup;
  selectedProduct: Product;

  constructor(
    private productsService: ProductsService,
    private formBuilder: FormBuilder,
    private productsRouter: ActivatedRoute,
    private router: Router
  ) {
    this.commentForm = this.formBuilder.group({
      username: ['', Validators.required],
      opinion: ['', Validators.compose([Validators.required, Validators.maxLength(1000)])],
      rating: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.productsRouter.paramMap.subscribe(params => {
      this.productsService.getProductItem(params.get('id'))
        .subscribe(product => this.selectedProduct = product);
    });
  }

  onComment(commentData) {
    commentData.productId = this.selectedProduct.id;
    this.productsService.postComment(commentData)
      .subscribe();
    this.router.navigate(['/products', commentData.productId]);
  }
}
