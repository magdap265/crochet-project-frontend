import { Component, OnInit, Input } from '@angular/core';
import {Pattern} from '../../../pattern.model';
import {ProductsService} from '../../../products.service';

@Component({
  selector: 'app-patterns-item',
  templateUrl: './patterns-item.component.html',
  styleUrls: ['./patterns-item.component.css']
})
export class PatternsItemComponent implements OnInit {
  @Input() pattern: Pattern;
  constructor(private productsService: ProductsService) { }

  ngOnInit() {
  }

  sanitizeVideoPath(videoPath) {
    return this.productsService.sanitizeVideoPath(videoPath);
  }
}
