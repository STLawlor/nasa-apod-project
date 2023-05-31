import { Component, EventEmitter, Output } from '@angular/core';
import { NgbDate, NgbDateStruct  } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent {
  @Output() public dateSelected = new EventEmitter<any>();
  public minDate: NgbDateStruct = { day: 16, month: 6, year: 1995 };
  public maxDate: NgbDateStruct = {
    day: new Date().getDate(),
    month: new Date().getMonth() + 1,
    year: new Date().getFullYear()
  }

  public onDateSelect(date: NgbDate): void {
    this.dateSelected.emit(date);
  }
}
