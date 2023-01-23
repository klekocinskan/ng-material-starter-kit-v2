import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { JobModel } from '../../models/job.model';
import { TagsModel } from '../../models/tags.model';
import { JobService } from '../../services/job.service';

@Component({
  selector: 'app-subject-string-external-job',
  styleUrls: ['./subject-string-external-job.component.scss'],
  templateUrl: './subject-string-external-job.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubjectStringExternalJobComponent {
  private _jobsSubject: BehaviorSubject<void> = new BehaviorSubject<void>(void 0);
  public jobs$: Observable<JobModel[]> = this._jobsSubject.asObservable().pipe(switchMap(data => this._jobService.getAll()));
  private _tagsSubject: Subject<any> = new Subject<any>();
  public tags$: Observable<TagsModel> = this._tagsSubject.asObservable().pipe(switchMap(data => this._jobService.getTag(data)));

  constructor(private _jobService: JobService) {
  }

  
  onTagButtonClicked(id: any){
    this._tagsSubject.next(id);

  }
}
