import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JobModel } from '../models/job.model';

@Injectable({ providedIn: 'root' })
export class JobService {
  constructor(private _httpClient: HttpClient) {
  }

  getBySearch(search: string): Observable<JobModel[]> {
    return this._httpClient.get<JobModel[]>('https://636ce2d8ab4814f2b2712854.mockapi.io/job-posts?search='+search);
  }
}
