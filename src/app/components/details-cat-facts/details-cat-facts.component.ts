import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { CatFactsModel } from '../../models/cat-facts.model';
import { CatFactsService } from '../../services/cat-facts.service';

@Component({
  selector: 'app-details-cat-facts',
  styleUrls: ['./details-cat-facts.component.scss'],
  templateUrl: './details-cat-facts.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsCatFactsComponent {
  readonly fact$: Observable<CatFactsModel> = this._catFactsService.getFact();

  constructor(private _catFactsService: CatFactsService) {
  }
}
