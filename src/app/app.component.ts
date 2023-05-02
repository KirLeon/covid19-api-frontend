import {
  Component
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  dateFrom: string
  dateTo: string
  country: string

  constructor() {
    this.dateFrom = ""
    this.dateTo = ""
    this.country = ""
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

  public sendData(){
    if(this.dateFrom != "" && this.dateTo != "" && this.country != ""){
      console.log(this.dateTo + " " + this.dateFrom + " " + this.country)
    }
  }

}
