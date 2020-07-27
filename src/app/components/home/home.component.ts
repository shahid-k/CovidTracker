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
  labels_countries = new Array();
  labels_cases = new Array();
  labels_top10 = new Array('United States of America', 'Brazil', 'India', 'Russian Federation', 'South Africa', 'Peru', 'Mexico', 'Chile', 'United Kingdom', 'Iran, Islamic Republic of','Spain','Pakistan','Saudi Arabia','Italy','Colombia','Turkey','Turkey','Germany');
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

    console.log(this.totalConfirmed - (this.data.reduce((a, b) => a + b, 0)))

    console.log(this.data);
    console.log(this.labels_top10);

    var myChart = new Chart("myChart", {
      type: 'pie',
      data: {
        labels: this.labels_top10,
        datasets: [{
          data: this.data,
          backgroundColor: [
            'rgba(0,150,57,0.7)',
            'rgba(218,41,28,0.7)',
            'rgba(255, 206, 86)',
            'rgba(0,0,0,0.8)',
            'rgba(255,143,28,0.7)',
            'rgba(200,16,46,0.8)',
            'rgba(0,122,51,0.7)',
            'rgba(147,112,219)',
            'rgba(188,143,143)',
            'rgba(0,206,209)',
            'rgba(216,191,216)',
            'rgba(30,144,255)',
            'rgba(144,238,144)',
            'rgba(128,128,0)',
            'rgba(75,0,130)',
            'rgba(250,235,215)',
            'rgba(233,150,122)',
            'rgba(178, 34, 52)'
          ],
          borderColor: [
            'rgba(0,150,57, 1)',
            'rgba(218,41,28, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(0,0,0, 1)',
            'rgba(255,143,28, 1)',
            'rgba(200,16,46, 1)',
            'rgba(0,122,51,1)',
            'rgba(147,112,219)',
            'rgba(188,143,143)',
            'rgba(0,206,209)',
            'rgba(216,191,216)',
            'rgba(30,144,255)',
            'rgba(144,238,144)',
            'rgba(128,128,0)',
            'rgba(75,0,130)',
            'rgba(250,235,215)',
            'rgba(233,150,122)',
            'rgba(178, 34, 52)'
          ]
        }]
      }
    });

  }

}
