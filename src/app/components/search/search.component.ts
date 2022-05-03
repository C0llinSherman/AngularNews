import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/interfaces/article';
import { APIService } from 'src/app/services/api.service';
import { SaveService } from 'src/app/services/save.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(
    private apiService: APIService,
    private saveService: SaveService
    ) { }

  query: any;
  response: any;
  articles: any;
  uid: string | undefined | null;

  ngOnInit(): void {
    this.apiService.getEverything(this.query).subscribe(res => {
      this.response = res;
      this.articles = this.response.articles
      console.log(this.response)
    })
    this.uid = localStorage.getItem('uid')
  }
  search() {
    this.apiService.getEverything(this.query).subscribe(res => {
      this.response = res;
      this.articles = this.response.articles
      console.log(this.response)
    })
  }
  saveArticle(article: Article) {
    this.saveService.saveArticle({ article: article, uid: this.uid })
    console.log(this.uid)
    console.log(article)
  }
}
