import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-subject-void-in-memory-random-names',
  styleUrls: ['./subject-void-in-memory-random-names.component.scss'],
  templateUrl: './subject-void-in-memory-random-names.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubjectVoidInMemoryRandomNamesComponent {
  names$: Observable<string[]> = of(['Maria', 'Tom', 'Zu', 'Kenny', 'Anna', 'Marta', 'Henry', 'Kim']);
  _refreshNamesSubject: BehaviorSubject<void> = new BehaviorSubject<void>(void 0);

  public refreshNames$: Observable<string[]> = this._refreshNamesSubject.asObservable().pipe(switchMap(data => this.getRandomNames()));

  getRandomNames(): Observable<string[]> {
    return this.names$.pipe(
      map(x => this.randomizeArray(x))
    )
  }

  randomizeArray(value: string[]) {
    let array: string[] = [];
    array[Math.floor(Math.random() * value.length)];
    return array;

  }
}



