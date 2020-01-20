import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  // @Output() selectedElement = new EventEmitter<string>();

  constructor( private productsRouter: ActivatedRoute ) {}

  // onSelectedNav(navElement: string){
  //   this.selectedElement.emit(navElement);
  // }
  // ngOnInit() {
  // }
}
