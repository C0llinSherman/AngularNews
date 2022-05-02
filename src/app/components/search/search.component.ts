import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/services/api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private apiService: APIService) { }

  query: any;
  response: any;
  articles: any;

  ngOnInit(): void {
    this.apiService.getEverything(this.query).subscribe(res => {
      this.response = res;
      this.articles = this.response.articles
      console.log(this.response)
    })
  }
search(){
  this.apiService.getEverything(this.query).subscribe(res => {
    this.response = res;
    this.articles = this.response.articles
    console.log(this.response)
  })

}
  saveArticle(url:string){
    console.log(url)
  }
}
