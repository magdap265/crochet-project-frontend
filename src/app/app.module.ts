import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductsListComponent } from './products/products-list/products-list.component';
import { CommentComponent } from './comments/comment.component';
import { ProductItemComponent } from './products/products-list/product-item/product-item.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductsComponent } from './products/products.component';
import { PatternsComponent } from './patterns/patterns.component';
import { ProductEditComponent } from './products/product-edit/product-edit.component';
import { PatternsListComponent } from './patterns/patterns-list/patterns-list.component';
import { PatternsItemComponent } from './patterns/patterns-list/patterns-item/patterns-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsListComponent,
    CommentComponent,
    ProductItemComponent,
    ProductDetailComponent,
    ProductsComponent,
    PatternsComponent,
    ProductEditComponent,
    PatternsListComponent,
    PatternsItemComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductsComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'product/:id', component: ProductsComponent },
      { path: 'product/:id/edit', component: ProductEditComponent },
      { path: 'patterns', component: PatternsListComponent },
      { path: 'product/:id/patterns', component: PatternsItemComponent },
      { path: 'comment', component: CommentComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
