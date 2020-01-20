import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedElement = 'products';
  title = 'crochet';

  onNavigate(navElement: string){
    this.loadedElement = navElement;
  }

}
