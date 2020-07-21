import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../services/data-service.service'
import { Chart } from '../../../../node_modules/chart.js'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  totalConfirmed = 0;
  totalRecovered = 0;
  totalDeaths = 0;
  GlobalStat;
  CountryStat;
  labels_top10 = new Array('United States of America', 'Brazil', 'India', 'Russian Federation', 'South Africa', 'Peru', 'Mexico', 'Chile', 'United Kingdom', 'Iran, Islamic Republic of');
  data = new Array();
  constructor(private GlobalData: DataServiceService) { }

  ngOnInit() {
    this.GlobalStat = JSON.parse(sessionStorage.getItem('GlobalStat'));
    this.CountryStat = JSON.parse(sessionStorage.getItem('CountryStat'));

    this.totalConfirmed = this.GlobalStat['TotalConfirmed'];
    this.totalRecovered = this.GlobalStat['TotalRecovered'];
    this.totalDeaths = this.GlobalStat['TotalDeaths'];
    this.labels_top10 = this.labels_top10.sort()

    this.labels_top10.forEach(top10 => {
      this.CountryStat.forEach(country => {
        if (top10 == country['Country']) {
          this.data.push(country['TotalConfirmed'])
        }
      });
    });

    console.log(this.totalConfirmed-(this.data.reduce((a, b) => a + b, 0)))

    console.log(this.data);
    console.log(this.labels_top10);


    var myChart = new Chart("myChart", {
      type: 'pie',
      data: {
        labels: this.labels_top10,
        datasets: [{
          data: this.data,
          backgroundColor: [
            'rgba(255, 99, 132)',
            'rgba(54, 162, 235)',
            'rgba(255, 206, 86)',
            'rgba(75, 192, 192)',
            'rgba(153, 102, 255)',
            'rgba(255, 159, 64)',
            'rgba(70,130,180)',
            'rgba(147,112,219)',
            'rgba(188,143,143)',
            'rgba(0,206,209)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(70,130,180)',
            'rgba(147,112,219)',
            'rgba(188,143,143)',
            'rgba(0,206,209)'
          ]
        }]
      }
    });

  }

}
