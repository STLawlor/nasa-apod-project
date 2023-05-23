import { Component, EventEmitter, Input, Output, OnInit} from '@angular/core';
import { NgbDate, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

import { InputStartDate } from 'src/app/models/input-start-date';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent {
  @Output() public dateSelected = new EventEmitter<any>();
  public startDate = new InputStartDate(1995, 6, 16)


  public onDateSelect(date: NgbDate): void {
    this.dateSelected.emit(date);
  }
}
