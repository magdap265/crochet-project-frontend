import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/products.service';
import { Pattern } from 'src/app/pattern.model';

@Component({
  selector: 'app-patterns-list',
  templateUrl: './patterns-list.component.html',
  styleUrls: ['./patterns-list.component.css']
})
export class PatternsListComponent implements OnInit {
  patternsList: Pattern[];

  constructor(
    private productsService: ProductsService) { }

  ngOnInit() {
    this.getPatterns();
  }

  getPatterns(): void {
    this.productsService.getPatterns()
      .subscribe(patterns => this.patternsList = patterns);
  }
}
