import {Component, EventEmitter, Output} from '@angular/core';
import {DatepickerHeaderComponent} from "../datepicker.header/datepicker-header.component";

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css', '../../../styles.css']
})
export class DatepickerComponent {

  minDate: Date;
  maxDate: Date;
  startDate: Date;
  endDate: Date;

  @Output() sendDateFromEmit = new EventEmitter;
  @Output() sendDateToEmit = new EventEmitter;

  constructor() {
    this.minDate = new Date(2020, 1, 22);
    this.maxDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate())
    this.startDate = new Date(2020, 1, 22);
    this.endDate = new Date();
  }

  protected readonly DatepickerHeaderComponent = DatepickerHeaderComponent;

  sendDate() {
    this.sendDateFromEmit.emit(this.formatDate(this.startDate))
    this.sendDateToEmit.emit(this.formatDate(this.endDate))
  }

  padTo2Digits(num: number) {
    return num.toString().padStart(2, '0');
  }

  formatDate(date: Date) {
    return (
      [
        date.getFullYear(),
        this.padTo2Digits(date.getMonth() + 1),
        this.padTo2Digits(date.getDate()),
      ].join('-') +
      'T' +
      [
        this.padTo2Digits(date.getHours()),
        this.padTo2Digits(date.getMinutes()),
        this.padTo2Digits(date.getSeconds()),
      ].join(':')
    );
  }
}
