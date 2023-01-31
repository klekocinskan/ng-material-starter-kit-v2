import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TagModel } from '../models/tag.model';

@Injectable({ providedIn: 'root' })
export class TagService {
  constructor(private _httpClient: HttpClient) {
  }

  getOne(id: string): Observable<TagModel> {
    return this._httpClient.get<TagModel>('https://636ce2d8ab4814f2b2712854.mockapi.io/job-tags/' + id);
  }

  updateTag(tag: TagModel): Observable<TagModel> {
    return this._httpClient.put<TagModel>('https://636ce2d8ab4814f2b2712854.mockapi.io/job-tags/'+ tag.id, tag);
  }
}
