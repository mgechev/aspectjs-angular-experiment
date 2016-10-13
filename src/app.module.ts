import './logging.aspect';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Component } from "@angular/core";
// import { Wove } from "aspect.js";
import { Wove } from 'aspect.js-angular';

@Wove()
@Component({
  selector: 'app',
  template: `<div>
    <h1>hello world {{counter}}</h1>
    <button type="button" (click)="increment()" class="increase">Increment</button>
  </div>`
})
class AppComponent {
  public counter: number = 0;

  increment(): void {
    console.log('INSIDE increment()');
    ++this.counter;
  }
}

@NgModule({
  imports: [ BrowserModule ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
