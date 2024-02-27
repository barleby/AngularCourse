import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageDbzComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddCharacterFormComponent } from './components/addcharacterForm/addcharacterForm.component';
import { CounterModule } from '../counter/counter.module';
import { CounterComponent2 } from '../counter/components/counter/counter.component';

@NgModule({
  declarations: [
    MainPageDbzComponent,
    ListComponent,

    AddCharacterFormComponent,

  ],
  exports: [MainPageDbzComponent, CounterComponent2],
  imports: [
    CommonModule,
    FormsModule,
    CounterModule
  ]
})
export class DbzModule { }
