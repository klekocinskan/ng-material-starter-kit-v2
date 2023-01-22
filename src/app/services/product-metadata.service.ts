import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductMetadataModel } from '../models/product-metadata.model';

@Injectable({ providedIn: 'root' })
export class ProductMetadataService {
  constructor(private _httpClient: HttpClient) {
  }

  getProductDetails(id: string): Observable<ProductMetadataModel[]> {
    return this._httpClient.get<ProductMetadataModel[]>('https://636ce2d8ab4814f2b2712854.mockapi.io/products/' +id + '/product-metadata');
  }
}
