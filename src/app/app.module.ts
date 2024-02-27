import { NgModule } from '@angular/core';

import { CounterModule } from './counter/counter.module';
import { HeroesModule } from './heroes/heroes.module';

import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';

import { DbzModule } from './dbz/dbz.module';
//import { HeroComponent } from './heroes/hero/hero.component';
import { FormsModule } from '@angular/forms';
import { DbzService } from './dbz/services/dbz.service';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    CounterModule,
    HeroesModule,
    DbzModule,
    FormsModule
  ],
  providers: [DbzService],
  bootstrap: [AppComponent]
})
export class AppModule { }
