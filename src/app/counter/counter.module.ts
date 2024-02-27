import { NgModule } from '@angular/core';
import { CounterComponent, CounterComponent2 } from './components/counter/counter.component';

@NgModule({
  declarations: [
    CounterComponent,
    CounterComponent2
  ],
  exports: [
    CounterComponent,
    CounterComponent2
  ],
})
export class CounterModule {

}
