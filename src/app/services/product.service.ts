import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductModel, ProductModelEdit } from '../models/product.model';

@Injectable({ providedIn: 'root' })
export class ProductService {
  constructor(private _httpClient: HttpClient) {
  }

  getOne(id: number): Observable<ProductModel> {
    return this._httpClient.get<ProductModel>("https://fakestoreapi.com/products/" + id);
  }

  getOneProduct(id: number): Observable<ProductModelEdit> {
    return this._httpClient.get<ProductModelEdit>("https://fakestoreapi.com/products/" + id);
  }

  getCategories(): Observable<string[]> {
    return this._httpClient.get<string[]>('https://fakestoreapi.com/products/categories');
  }

  updateProduct(product: ProductModelEdit): Observable<ProductModelEdit> {
    return this._httpClient.put<ProductModelEdit> ("https://fakestoreapi.com/products/" + product.id, product);
  }
}
