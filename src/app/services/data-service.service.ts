import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {map} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  private globaldatabygit = "https://github.com/CSSEGISandData/COVID-19/blob/master/csse_covid_19_data/csse_covid_19_daily_reports/07-19-2020.csv"
  constructor(private http:HttpClient) { }

  getGlobalData(){
    return this.http.get(this.globaldatabygit).pipe(map(result=>{
      console.log("from service   "+result);
    }))
  }
}
