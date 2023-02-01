import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JobModel } from '../models/job.model';
import { TagModel } from '../models/tag.model';

@Injectable({ providedIn: 'root' })
export class JobService {
  constructor(private _httpClient: HttpClient) {
  }

  getOneJob(id: string): Observable<JobModel> {
    return this._httpClient.get<JobModel>('https://636ce2d8ab4814f2b2712854.mockapi.io/job-tags/' + id);
  }

  getAllJobs(): Observable<JobModel[]> {
    return this._httpClient.get<JobModel[]>('https://636ce2d8ab4814f2b2712854.mockapi.io/job-tags/');
  }

  updateJob(job: JobModel): Observable<JobModel> {
    return this._httpClient.put<JobModel>('https://636ce2d8ab4814f2b2712854.mockapi.io/job-posts/' + job.id, job);
  }

  getAllTag(): Observable<TagModel[]> {
    return this._httpClient.get<TagModel[]>('https://636ce2d8ab4814f2b2712854.mockapi.io/job-tags');
  }
}
