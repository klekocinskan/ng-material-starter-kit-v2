import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { CatModel } from '../../models/cat.model';
import { CatService } from '../../services/cat.service';

@Component({
  selector: 'app-void-external-random-cat-facts',
  styleUrls: ['./void-external-random-cat-facts.component.scss'],
  templateUrl: './void-external-random-cat-facts.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VoidExternalRandomCatFactsComponent {
  // readonly catFact$: Observable<CatModel> = this._catService.getAll();
  private _refresCatFactSubject: BehaviorSubject<void> = new BehaviorSubject<void>(void 0);
  public catFact$: Observable<CatModel> = this._refresCatFactSubject.asObservable()
            .pipe(switchMap(data => this._catService.getAll()));

  constructor(private _catService: CatService) {
  }

  onNextButtonClicked() {
    this._catService.getAll().subscribe(
      () => this._refresCatFactSubject.next()
    );

  }
}
