import { Component } from '@angular/core';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-date-selector',
  templateUrl: './date-selector.component.html',
  styleUrls: ['./date-selector.component.scss']
})
export class DateSelectorComponent {
  public selectedDate: string | undefined;

  public onDateSelected(date: NgbDate) {
    let day = date.day < 10 ? ('0' + date.day.toString()) : date.day.toString();
    let month = date.month < 10 ? ('0' + date.month.toString()) : date.month.toString();
    let year = date.year.toString();

    this.selectedDate = `${year}-${month}-${day}`;
  }
}
