import { Component, OnInit, Input } from '@angular/core';

import { ProductsService } from 'src/app/products.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-patterns',
  templateUrl: './patterns.component.html',
  styleUrls: ['./patterns.component.css']
})
export class PatternsComponent implements OnInit {

  constructor( 
    private productsService: ProductsService,
    private productRouter: ActivatedRoute) { }

  ngOnInit() {
  }

}
