import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ExchangeService} from "./exchange.service";
import {DateValue} from "../model/DateValue";

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  url: string = "http://127.0.0.1:8083/country"

  constructor(private http: HttpClient, private statsService: ExchangeService) {
  }

  public requestData(dateFrom: string, dateTo: string, country: string) {
    const headers = {'Content-Type': 'application/json'}
    const bodyJson: string = "{ \"countryName\": \"" + country + "\",\n"
      + "\"dateFrom\": \"" + dateFrom + "\",\n" +
      "\"dateTo\": \"" + dateTo + "\"\n}"

    console.log("Requesting: " + this.url + "\n" + bodyJson + "\n")
    this.http.post<any>(this.url, bodyJson, {headers}).subscribe(data => {
      let map = this.proceedData(data);
      this.statsService.exchangeStats(map);
    });

  }

  public proceedData(data: any): DateValue[] {
    if (data.status === 'BadRequest') {
      console.log('Ответ сервера: Invalid Data');
      return [];
    } else {
      const response = data.map((obj: any) => new DateValue(obj.date, obj.value));
      console.log('Ответ сервера:');
      console.log(response);
      return response;
    }
  }

}
