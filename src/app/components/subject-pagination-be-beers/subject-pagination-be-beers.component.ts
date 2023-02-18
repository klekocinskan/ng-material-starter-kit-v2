import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { BehaviorSubject, Observable, switchMap } from 'rxjs';
import { BeerModel } from '../../models/beer.model';
import { BeerService } from '../../services/beer.service';

@Component({
  selector: 'app-subject-pagination-be-beers',
  styleUrls: ['./subject-pagination-be-beers.component.scss'],
  templateUrl: './subject-pagination-be-beers.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubjectPaginationBeBeersComponent {
  private _beersSubject: BehaviorSubject<[number,number]> =
    new BehaviorSubject<[number,number]>([1, 5]);


  readonly beers$: Observable<BeerModel[]> = this._beersSubject.asObservable()
  .pipe(
    switchMap((size)=>
     this._beerService.getAll(size[0],size[1]))
  )

  constructor(private _beerService: BeerService) {
  }
  EventHandler(event: PageEvent){
    this._beersSubject.next([event.pageIndex +1 ,event.pageSize])
  }
}
