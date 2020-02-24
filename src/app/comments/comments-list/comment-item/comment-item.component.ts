import {Component, Input} from '@angular/core';
import {Comment} from '../../../comment.model';

@Component({
  selector: 'app-comment-item',
  templateUrl: './comment-item.component.html',
  styleUrls: ['./comment-item.component.css']
})
export class CommentItemComponent {
  @Input() comment: Comment;

  constructor() {  }

}
