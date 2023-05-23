export class DateValue {


  private _date: string
  private _value: number

  constructor(date: string, value: number) {
    this._date = date;
    this._value = value;
  }

  get value(): number {
    return this._value;
  }

  set value(value: number) {
    this._value = value;
  }

  get date(): string {
    return this._date;
  }

  set date(value: string) {
    this._date = value;
  }
}
