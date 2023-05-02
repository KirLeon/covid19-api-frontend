export class Request {
  get dateTo(): string {
    return this._dateTo;
  }

  set dateTo(value: string) {
    this._dateTo = value;
  }
  get dateFrom(): string {
    return this._dateFrom;
  }

  set dateFrom(value: string) {
    this._dateFrom = value;
  }
  get country(): string {
    return this._country;
  }

  set country(value: string) {
    this._country = value;
  }

  private _country: string;
  private _dateFrom: string;
  private _dateTo: string;


  constructor(country: string, dateFrom: string, dateTo: string) {
    this._country = country;
    this._dateFrom = dateFrom;
    this._dateTo = dateTo;
  }
}
