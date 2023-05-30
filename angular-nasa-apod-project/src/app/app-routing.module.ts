import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DateSelectorComponent } from './components/date-selector/date-selector.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'date-selector', component: DateSelectorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
