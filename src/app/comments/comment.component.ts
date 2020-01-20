import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ProductsService } from 'src/app/products.service';
import { Product } from '../product.model';


@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  clickedSend = false;
  commentForm;
  selectedProduct: Product;

  constructor(
    private productsService: ProductsService, 
    private formBuilder: FormBuilder,
    ) {
    this.commentForm = this.formBuilder.group({
      name: '',
      lastName: '',
      username: '',
      message: ''
    })
   }


  ngOnInit() {
    this.selectedProduct = this.productsService.selectedProduct;

  }
  
  onSendMessage(){
    this.clickedSend = !this.clickedSend;
    // console.log(this.commentForm.name);
  }
}
