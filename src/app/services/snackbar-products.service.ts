import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SnackbarProductsModel } from '../models/snackbar-products.model';

@Injectable({ providedIn: 'root' })
export class SnackbarProductsService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<SnackbarProductsModel[]> {
    return this._httpClient.get<SnackbarProductsModel[]>('https://636ce2d8ab4814f2b2712854.mockapi.io/products');
  }
}
