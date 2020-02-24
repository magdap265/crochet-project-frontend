import {Component, AfterContentInit} from '@angular/core';
import {Product} from '../product.model';
import {ProductsService} from '../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  constructor() {
  }

}
