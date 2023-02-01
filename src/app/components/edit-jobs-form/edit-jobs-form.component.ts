import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, Observable } from 'rxjs';
import { map, switchMap, take, tap } from 'rxjs/operators';
import { TagModel } from 'src/app/models/tag.model';
import { JobModel } from '../../models/job.model';
import { JobService } from '../../services/job.service';
import { TagService } from '../../services/tag.service';

@Component({
  selector: 'app-edit-jobs-form',
  styleUrls: ['./edit-jobs-form.component.scss'],
  templateUrl: './edit-jobs-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditJobsFormComponent {
  readonly job$: Observable<JobModel> = this._activatedRoute.params.pipe(
    switchMap(data => this._jobService.getOneJob(data['id']))
  );

  readonly tags$: Observable<TagModel[]> = combineLatest([
    this.job$,
    this._jobService.getAllTag()
    ]).pipe(
      tap(([details,list]) => {
        list.forEach((tag)=>{
          (this.jobsForm.get("jobTagIds") as FormGroup).addControl(
            tag.id,
            new FormControl(details.jobTagIds.includes(+tag.id))
          );
        });
      }),
      map(([details,list]) => {
        return list;
      })
    )

  readonly jobsForm: FormGroup = new FormGroup({
    title: new FormControl(),
    description: new FormControl(),
    jobTagIds: new FormGroup({})
  });

  constructor(private _activatedRoute: ActivatedRoute,
               private _jobService: JobService)  {
        this.job$.subscribe((data) => 
                this.jobsForm.patchValue(data))
  }

  onJobsFormSubmitted(jobsForm: FormGroup): void {
    this._activatedRoute.params.pipe(
        take(1),
        switchMap(
        (data) => this._jobService.updateJob(
          {  
          id: data['id'], 
          ...jobsForm.value }
      ))).subscribe();


   
  }
}
