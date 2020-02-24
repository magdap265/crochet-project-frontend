import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../../products.service';
import {Comment} from '../../comment.model';

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.css']
})
export class CommentsListComponent implements OnInit {
  commentsList: Comment[];

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.getComments();
  }

  getComments() {
    this.productsService.getComments()
      .subscribe(comments => this.commentsList = comments);
  }

}
