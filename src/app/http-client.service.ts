import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  url: string = "http://127.0.0.1:8083/"
  constructor(private http: HttpClient) {
  }

  public requestData(dateFrom: string, dateTo: string, country: string) {
    const bodyJson: string = "{ \"countryName\": \"" + country + "\",\n"
      + "{ \"dateFrom\": \"" + dateFrom + "\",\n" +
      "{ \"dateTo\": \"" + dateTo + "\""
    const headers = { 'Content-Type': 'application/json'}
    this.http.post<any>(this.url, bodyJson, {headers});
  }
}
