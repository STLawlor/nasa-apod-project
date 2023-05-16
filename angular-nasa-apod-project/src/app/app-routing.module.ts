import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PicOfDayComponent } from './components/pic-of-day/pic-of-day.component';
import { DatePickerComponent } from './components/date-picker/date-picker.component';

const routes: Routes = [
  { path: '', component: PicOfDayComponent, pathMatch: 'full' },
  { path: 'date-picker', component: DatePickerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
