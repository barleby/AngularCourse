import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <p>Counter: {{counter}}</p>
  <button (click)="increment()">+1</button>
  <button (click)="decrement()">-1</button>
  <button (click)="reset()">Reset counter</button>
  `
})
export class CounterComponent {

  public counter: number = 10;

  increment(): void {
    this.counter += 1;
  }
  decrement(): void {
    this.counter -= 1;
  }
  reset(): void {
    this.counter = 10;
  }
}
