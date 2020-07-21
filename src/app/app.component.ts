import { Component, OnInit } from '@angular/core';
import {DataServiceService} from './services/data-service.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'CovidTracker';
  Global='';
  Countries;
  constructor(private Data:DataServiceService){}
  ngOnInit(){
    this.Data.getGlobalDatabyJson().subscribe(globalData=>{
      
      this.Global=JSON.stringify(globalData['Global']);
      this.Countries=JSON.stringify(globalData['Countries'])

      sessionStorage.setItem('GlobalStat',this.Global)
      sessionStorage.setItem('CountryStat',this.Countries)


    })
    // console.log(JSON.parse(sessionStorage.getItem('GlobalStat')));
    console.log(JSON.parse(sessionStorage.getItem('CountryStat')));

    

  }
}
