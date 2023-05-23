import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PicOfDayComponent } from './components/pic-of-day/pic-of-day.component';
import { DateSelectorComponent } from './components/date-selector/date-selector.component';

const routes: Routes = [
  { path: '', component: PicOfDayComponent, pathMatch: 'full' },
  { path: 'date-selector', component: DateSelectorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
