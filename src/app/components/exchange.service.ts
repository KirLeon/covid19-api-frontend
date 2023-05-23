import {Injectable} from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ExchangeService {

  constructor() {
  }

  private exchanger = new Subject<{value: number, date: string }[]>();
  private _dataToExchange!: {value: number, date: string }[];

  exchangeStats(data: {value: number, date: string }[]) {
    this._dataToExchange = data;
    this.exchanger.next(data);
  }

  get exchangeData$() {
    return this.exchanger.asObservable();
  }

  get dataToExchange(): {value: number, date: string }[] {
    return this._dataToExchange;
  }
}
