import { Component, OnInit } from '@angular/core';
import {DataServiceService} from '../../services/data-service.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  totalConfirmed=0;
  totalRecovered=0;
  totalDeaths=0;
  constructor(private GlobalData:DataServiceService) { }

  ngOnInit() {
    this.GlobalData.getGlobalDatabyJson().subscribe(data=>{
      console.log(data);
      this.totalConfirmed=data['Global']['TotalConfirmed'];
      this.totalRecovered=data['Global']['TotalRecovered'];
      this.totalDeaths=data['Global']['TotalDeaths'];
    })

  }

}
