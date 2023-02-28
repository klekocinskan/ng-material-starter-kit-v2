import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { JobModel } from '../../models/job.model';
import { JobService } from '../../services/job.service';

@Component({
  selector: 'app-search-multi-jobs',
  styleUrls: ['./search-multi-jobs.component.scss'],
  templateUrl: './search-multi-jobs.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchMultiJobsComponent {
  readonly form: FormControl = new FormControl();
  readonly jobs$: Observable<JobModel[]> = this._activatedRoute
        .queryParams.pipe(
          switchMap((data)=>
          this._jobService.getBySearch(data['search'])
          )
        )

  constructor(private _jobService: JobService,
              private _activatedRoute: ActivatedRoute) {
  }
}
