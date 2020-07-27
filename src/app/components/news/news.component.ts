import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../services/data-service.service'

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  newsDataObj;
  constructor(private DataService: DataServiceService) { }

  ngOnInit() {
    this.DataService.getGlobalNews().subscribe(newsData => {
      if (newsData['status'] == "ok") {
        this.newsDataObj = newsData['articles'];
        console.log(this.newsDataObj);



      }
    })


  }



}
