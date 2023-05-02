import {Component, EventEmitter, Output} from '@angular/core';
import {Regions} from "../../model/Regions";

@Component({
  selector: 'app-region',
  templateUrl: 'region.selector.component.html',
  styleUrls: ['./region.selector.component.css', '../../../styles.css']
})
export class RegionSelectorComponent {

  selectedContinent!: string;
  selectedCountry!: string;
  countries!: readonly string[];
  @Output() sendCountryEmit = new EventEmitter;

  public onContinentChange() {
    this.countries = Regions.getCountriesByContinent(this.selectedContinent);
  }

  sendRegionInfo(){
    this.sendCountryEmit.emit(this.selectedCountry)
  }
}
