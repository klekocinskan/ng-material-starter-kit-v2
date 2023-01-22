import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { CryptoModel } from '../../models/crypto.model';
import { CryptoService } from '../../services/crypto.service';

@Component({
  selector: 'app-model-in-memory-crypto',
  styleUrls: ['./model-in-memory-crypto.component.scss'],
  templateUrl: './model-in-memory-crypto.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModelInMemoryCryptoComponent {
  private _cryptoSubjectSubject: BehaviorSubject<void> = new BehaviorSubject<void>(void 0);
  public crypto$: Observable<CryptoModel[]> = this._cryptoSubjectSubject.asObservable().pipe(
    switchMap(data => this._cryptoService.getAll()));
  private _cryptoDetailsSubject: Subject<CryptoModel> = new Subject<CryptoModel>();
  public cryptoDetails$: Observable<CryptoModel> = this._cryptoDetailsSubject.asObservable();

  constructor(private _cryptoService: CryptoService) {
  }

  onButtonClicked(crypto: CryptoModel){
      this._cryptoDetailsSubject.next(crypto);
  }
}
