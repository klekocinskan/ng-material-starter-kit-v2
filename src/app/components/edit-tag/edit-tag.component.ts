import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';
import { TagModel } from '../../models/tag.model';
import { TagService } from '../../services/tag.service';

@Component({
  selector: 'app-edit-tag',
  styleUrls: ['./edit-tag.component.scss'],
  templateUrl: './edit-tag.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditTagComponent {
  readonly tag$: Observable<TagModel> = this._activatedRoute.params.pipe(
    switchMap(data => this._tagService.getOne(data['id']))
  );



  readonly tagForm: FormGroup = new FormGroup({ name: new FormControl() });

  constructor(private _activatedRoute: ActivatedRoute, private _tagService: TagService) {
  }

  onTagFormSubmitted(tagForm: FormGroup): void {
    this._activatedRoute.params.pipe(
      take(1),
      switchMap((data)=>
      this._tagService.updateTag({
        id: data['id'],
       ...tagForm.value
      })
      )
    ).subscribe();
  }
}
