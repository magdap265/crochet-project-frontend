import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {ProductsListComponent} from './products/products-list/products-list.component';
import {CommentComponent} from './products/comment/comment.component';
import {CommentsListComponent} from './comments/comments-list/comments-list.component';
import {ProductItemComponent} from './products/products-list/product-item/product-item.component';
import {ProductDetailComponent} from './products/product-detail/product-detail.component';
import {ProductsComponent} from './products/products.component';
import {PatternsComponent} from './patterns/patterns.component';
import {ProductEditComponent} from './products/product-edit/product-edit.component';
import {PatternsListComponent} from './patterns/patterns-list/patterns-list.component';
import {PatternsItemComponent} from './patterns/patterns-list/patterns-item/patterns-item.component';
import {ProductAddComponent} from './products/product-add/product-add.component';
import {CommentItemComponent} from './comments/comments-list/comment-item/comment-item.component';
import {ProductPatternComponent} from './products/product-pattern/product-pattern.component';
import {RatingComponent} from './products/product-detail/rating/rating.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsListComponent,
    CommentComponent,
    CommentsListComponent,
    ProductItemComponent,
    ProductDetailComponent,
    ProductsComponent,
    PatternsComponent,
    ProductEditComponent,
    PatternsListComponent,
    PatternsItemComponent,
    ProductAddComponent,
    CommentItemComponent,
    ProductPatternComponent,
    RatingComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: '', component: ProductsComponent},
      {path: 'products', component: ProductsComponent},
      {path: 'products/add', component: ProductAddComponent},
      {path: 'products/:id/comment', component: CommentComponent},
      {path: 'products/:id', component: ProductsComponent},
      {path: 'products/:id/edit', component: ProductEditComponent},
      {path: 'patterns', component: PatternsComponent},
      {path: 'products/:id/pattern', component: ProductPatternComponent},
      {path: 'comments', component: CommentsListComponent}

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
