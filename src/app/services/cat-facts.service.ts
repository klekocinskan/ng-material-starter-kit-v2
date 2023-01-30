import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CatFactsModel } from '../models/cat-facts.model';

@Injectable({ providedIn: 'root' })
export class CatFactsService {
  constructor(private _httpClient: HttpClient) {
  }

  getFact(): Observable<CatFactsModel> {
    return this._httpClient.get<CatFactsModel>('https://catfact.ninja/fact');
  }
}
