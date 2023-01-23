import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductsModel } from '../models/products.model';

@Injectable({ providedIn: 'root' })
export class ProductsService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<ProductsModel[]> {
    return this._httpClient.get<ProductsModel[]>('https://fakestoreapi.com/products');
  }

  delete(id: number): Observable<ProductsModel> {
    return this._httpClient.delete<ProductsModel>('https://fakestoreapi.com/products/' + id);
  }

  getOne(id: number): Observable<ProductsModel>{
    return this._httpClient.get<ProductsModel>('https://fakestoreapi.com/products/' + id);
  }
  
  getByCategory(category: string): Observable<ProductsModel[]>{
    return this._httpClient.get<ProductsModel[]>('https://fakestoreapi.com/products/category/' +category);
  }

}
