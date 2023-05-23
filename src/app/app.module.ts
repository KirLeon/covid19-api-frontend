import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {RegionSelectorComponent} from "./components/region.selector/region.selector.component";
import {HeaderComponent} from './components/header/header.component';
import {DatepickerComponent} from './components/datepicker/datepicker.component';
import {MatNativeDateModule} from '@angular/material/core';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSliderModule} from "@angular/material/slider";
import {DatepickerHeaderComponent} from './components/datepicker.header/datepicker-header.component';
import {HttpClientModule} from "@angular/common/http";
import {LineChartComponent} from './components/line.chart/line-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    RegionSelectorComponent,
    HeaderComponent,
    DatepickerComponent,
    DatepickerHeaderComponent,
    LineChartComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatButtonModule,
    MatSliderModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatIconModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
