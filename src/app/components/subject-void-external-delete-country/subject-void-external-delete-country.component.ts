import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { CountryModel } from '../../models/country.model';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-subject-void-external-delete-country',
  styleUrls: ['./subject-void-external-delete-country.component.scss'],
  templateUrl: './subject-void-external-delete-country.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubjectVoidExternalDeleteCountryComponent {
  private _refreshDeletedCountryListSubject: BehaviorSubject<void> = new BehaviorSubject<void>(void 0);
  public countries$: Observable<CountryModel[]> = this._refreshDeletedCountryListSubject.asObservable().pipe(switchMap(data => this._countryService.getAll()));

  constructor(private _countryService: CountryService) {
  }

  onRemoveButtonClicked(country: CountryModel) {
    this._countryService.delete(country.id).subscribe(
      () => this._refreshDeletedCountryListSubject.next()
    );
  }
}
