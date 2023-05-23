import {
  Component, ElementRef
} from '@angular/core';
import {HttpClientService} from "./components/http-client.service";
import {ExchangeService} from "./components/exchange.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  dateFrom: string
  dateTo: string
  country: string
  statistics: { value: number, date: string }[] = [];
  subscription: Subscription;

  constructor(private httpClient: HttpClientService, private statsService: ExchangeService) {
    this.dateFrom = "";
    this.dateTo = "";
    this.country = "";
    this.subscription = this.statsService.exchangeData$.subscribe(data => {
      this.statistics = data;
    });
  }

  public onCountryChange(country: string) {
    this.country = country
  }

  public onDateFromChange(dateFrom: string) {
    this.dateFrom = dateFrom;
  }

  public onDateToChange(dateTo: string) {
    this.dateTo = dateTo;
  }

  public sendData() {
    if (this.dateFrom != "" && this.dateTo != "" && this.country != "") {
      console.log(this.dateTo + " " + this.dateFrom + " " + this.country)
      this.httpClient.requestData(this.dateFrom, this.dateTo, this.country)
    }
  }

}
