import {Injectable, OnInit} from '@angular/core';
import {Product} from './product.model';
import {Comment} from './comment.model';
import {Pattern} from './pattern.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {DomSanitizer} from '@angular/platform-browser';

// const apiUrl = 'http://project.test/api';
const apiUrl = 'https://sleepy-oasis-15035.herokuapp.com/api';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient, private sanitizer: DomSanitizer) {
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${apiUrl}/products`)
      .pipe();
  }

  getProductItem(id): Observable<Product> {
    return this.http.get<Product>(`${apiUrl}/products/${id}`)
      .pipe();
  }

  putProductItem(editedData, oryginalData): Observable<Product> {
    const newData = oryginalData;
    typeof editedData.name !== 'object' ? newData.name = editedData.name : null;
    typeof editedData.productType !== 'object' ? newData.productType = editedData.productType : null;
    typeof editedData.color !== 'object' ? newData.color = editedData.color : null;
    typeof editedData.ropeSize !== 'object' ? newData.ropeSize = editedData.ropeSize : null;
    typeof editedData.description !== 'object' ? newData.description = editedData.description : null;
    typeof editedData.imagePath !== 'object' ? newData.imagePath = editedData.imagePath : null;
    typeof editedData.videoPath !== 'object' ? newData.videoPath = editedData.videoPath : null;
    console.log(newData);
    return this.http.put<Product>(
      `${apiUrl}/products/${oryginalData.id}`,
      newData,
      {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
      })
      .pipe(
      //   tap(_ => '')
      );
  }

  postProductItem(productData): Observable<Product> {
    return this.http.post<Product>(`${apiUrl}/products/add`, productData)
      .pipe(
      );
  }

  deleteProductItem(id): Observable<Product> {
    return this.http.delete<Product>(`${apiUrl}/products/${id}`)
      .pipe();
  }

  getPatterns(): Observable<Pattern[]> {
    return this.http.get<Pattern[]>(`${apiUrl}/patterns`)
      .pipe();
  }

  getPatternByProductId(id): Observable<Product> {
    return this.http.get<Product>(`${apiUrl}/products/${id}/pattern`)
      .pipe();
  }


  getCommentsByProductId(id): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${apiUrl}/products/${id}/comments`)
      .pipe(
      );
  }

  getComments(): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${apiUrl}/comments`)
      .pipe(
      );
  }

  postComment(commentData): Observable<Comment> {
    return this.http.post<Comment>(`${apiUrl}/comments`, commentData)
      .pipe(
          // tap(_ => '')
      );
  }

  sanitizeVideoPath(videoPath) {
    if (videoPath) {
      const fixedUrl = videoPath.replace('watch?v=', 'embed/');
      return this.sanitizer.bypassSecurityTrustResourceUrl(fixedUrl);
    }
    return null;
  }
}

