import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, Observable, combineLatest, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { CryptoService } from '../../services/crypto.service';
import { CryptoModel } from '../../models/crypto.model';

@Component({
  selector: 'app-sorting-field-crypto',
  styleUrls: ['./sorting-field-crypto.component.scss'],
  templateUrl: './sorting-field-crypto.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SortingFieldCryptoComponent {
  readonly sortAscDscOption$: Observable<string[]> = of(['asc', 'dsc']);
  readonly sortByPriceOption$: Observable<string[]> = of(['lastPrice', 'openPrice', 'priceChange']);
  private _sortedAscDscOptionSubject: BehaviorSubject<string > = new BehaviorSubject<string >('');
  public _sortedAscDscOption$: Observable<string> = this._sortedAscDscOptionSubject.asObservable();
  public _sortedByPriceOptionSubject: BehaviorSubject<string > = new BehaviorSubject<string >('');
  public _sortedByPriceOption$: Observable<string> = this._sortedByPriceOptionSubject.asObservable();


  constructor(private _cryptoService: CryptoService) {
  }

  readonly crypto$: Observable<CryptoModel[]> = combineLatest([
    this._cryptoService.getAll(),
    this._sortedAscDscOption$,
    this._sortedByPriceOption$
  ]).pipe(
    map(([crypto,sortAscDscOption,sortByPriceOption])=>
    {
      if(sortByPriceOption){
        switch(sortByPriceOption){
          case "lastPrice":
            return crypto.sort((x,y)=>{
              return this.sortAscDsc(+x.lastPrice, +y.lastPrice, sortAscDscOption );
            });
          case "openPrice":
            return crypto.sort((x,y)=>{
              return this.sortAscDsc(+x.openPrice, +y.openPrice, sortAscDscOption );
            });
          case "priceChange":
            return crypto.sort((x,y)=>{
              return this.sortAscDsc(+x.priceChange, +y.priceChange, sortAscDscOption );
            });
        }
      }
      
      return crypto;
    }
    
    )
    
   
    )
  


  sortAscDsc(x: number, y: number, option: string) {
    if (option === 'dsc') {
      return x < y ? 1 : -1;
    } else {
      return x > y ? 1 : -1;
    }
  }

  sortAscDscChanged(option: string){
    this._sortedAscDscOptionSubject.next(option);
  }

  sortByPriceChanged(option: string){
    this._sortedByPriceOptionSubject.next(option);
  }

}


