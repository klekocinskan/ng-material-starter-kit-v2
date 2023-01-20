import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, map, Observable, of, switchMap } from 'rxjs';

@Component({
  selector: 'app-subject-void-inmemory-random-number',
  styleUrls: ['./subject-void-inmemory-random-number.component.scss'],
  templateUrl: './subject-void-inmemory-random-number.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubjectVoidInmemoryRandomNumberComponent {
  numbers$: Observable<number[]> = of([1,2,3,4,5,6]);


  numberSubject: BehaviorSubject<void> =  new BehaviorSubject<void>(void 0);

  
  randomNumber$: Observable<number> =  this.numberSubject.asObservable().pipe(
            switchMap(()=> this.getRandomNumber())
          );

  getRandomNumber(){
    return this.numbers$.pipe(map(x => x[randomNumber(x.length)]));
  }

  newNumber(){
    return this.numberSubject.next();
  }
 
}

function randomNumber(x = 100){
  let random = Math.random() * x;
  return Math.floor(random);
}


