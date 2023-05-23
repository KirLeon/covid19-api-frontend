import { AfterViewInit, Component, ElementRef, Input, OnChanges, ViewChild } from '@angular/core';
import { Chart, registerables } from "chart.js";
import 'chartjs-adapter-moment';

Chart.register(...registerables);

@Component({
  selector: 'line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['line-chart.component.css']
})
export class LineChartComponent implements AfterViewInit, OnChanges {
  @ViewChild('myChart') myChart!: ElementRef;
  @Input() data!: { value: number, date: string }[];

  private chart: Chart | undefined;

  ngAfterViewInit() {
    this.createChart();
    console.log("Data ", this.data);
  }

  ngOnChanges() {
    if (this.chart) {
      this.updateChart();
    }
  }

  createChart() {
    const values = this.data.map(entry => entry.value);
    const dates = this.data.map(entry => new Date(entry.date));

    const ctx = this.myChart.nativeElement.getContext('2d');
    if (!ctx) {
      console.error('Canvas element not found.');
      return;
    }

    this.chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: dates,
        datasets: [{
          label: 'Values',
          data: values,
          backgroundColor: 'rgba(0, 123, 255, 0.5)',
          borderColor: 'rgba(0, 123, 255, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          x: {
            type: 'time',
            time: {
              displayFormats: {
                day: 'YYYY-MM-DD'
              }
            }
          },
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  updateChart() {
    const values = this.data.map(entry => entry.value);
    const dates = this.data.map(entry => new Date(entry.date));

    if (this.chart) {
      this.chart.data.labels = dates;
    }
    if(this.chart){
      this.chart.data.datasets[0].data = values;
    }

    this.chart?.update();
  }
}
