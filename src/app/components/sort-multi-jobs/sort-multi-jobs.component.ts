import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { combineLatest, map, Observable, of } from 'rxjs';
import { JobPostsModel } from 'src/app/models/job-posts.model';
import { JobPostsService } from 'src/app/services/job-posts.service';
import { ProductModel } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-sort-multi-jobs',
  styleUrls: ['./sort-multi-jobs.component.scss'],
  templateUrl: './sort-multi-jobs.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SortMultiJobsComponent {
  readonly sortAscDSC$ = of(['asc', 'dsc']);
  readonly sortProperty$ = of(['title', 'description']);

  readonly jobsForm: FormGroup = new FormGroup({
    sortOption: new FormControl(),
    sortOption2: new FormControl()
  });
  readonly jobs$: Observable<JobPostsModel[]> = combineLatest([
    this._jobPostsService.getAll(),
    this.jobsForm.valueChanges
  ]).pipe(
    map(([jobs, sortForm])=>
    {
      if(sortForm.sortOption2 === 'description'){
        return jobs.sort((x,y)=>{
          if(sortForm.sortOption === 'dsc'){
            return x.description?.toUpperCase() < y.description?.toUpperCase() ? 1 : -1;
          }else{
            return x.description?.toUpperCase() > y.description?.toUpperCase() ? 1 : -1;
          }
       })}
       return jobs.sort((x,y)=>{
        if(sortForm.sortOption === 'dsc'){
          return x.title?.toUpperCase() < y.title?.toUpperCase() ? 1 : -1;
        }else{
          return x.title?.toUpperCase() > y.title?.toUpperCase() ? 1 : -1;
        }
       })
    })
  )
   

  constructor(private _jobPostsService: JobPostsService) {
  }

  onProductsFormSubmitted(productsForm: FormGroup): void {
  }
}
