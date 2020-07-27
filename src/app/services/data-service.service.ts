import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {map} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  private globaldatabygit = "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/07-19-2020.csv"
  private dailydata = "https://api.covid19api.com/summary"
  private news='https://newsapi.org/v2/everything?q=covid&apiKey=9ce623ad44054706a4e99553c56a0ddf'
  constructor(private http:HttpClient) { }

  getGlobalData(){
    return this.http.get(this.globaldatabygit,{responseType:'text'}).pipe(map(result=>{
      return result;
    }))
  }
  getGlobalDatabyJson(){
    return this.http.get(this.dailydata)
  }

  getGlobalNews(){
    return this.http.get(this.news)
  }
}
