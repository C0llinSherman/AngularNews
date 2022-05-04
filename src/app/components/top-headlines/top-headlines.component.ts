import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/interfaces/article';
import { APIService } from 'src/app/services/api.service';
import { SaveService } from 'src/app/services/save.service';

@Component({
  selector: 'app-top-headlines',
  templateUrl: './top-headlines.component.html',
  styleUrls: ['./top-headlines.component.scss']
})
export class TopHeadlinesComponent implements OnInit {

  constructor(
    private apiService: APIService,
    private saveService: SaveService
  ) { }

  category: string = 'general';
  response: any;
  articles: any;
  uid: string | undefined | null;

  ngOnInit(): void {
    this.apiService.getFeatured(this.category).subscribe(res => {
      this.response = res;
      this.articles = this.response.articles
    })
    this.uid = localStorage.getItem('uid')
  }

  getCategory(category: string) {
    this.category = category
    this.apiService.getFeatured(this.category).subscribe(res => {
      this.response = res;
      this.articles = this.response.articles
      
    })
  }
  saveArticle(article: Article) {
    this.saveService.saveArticle({ article: article, uid: this.uid })
  }
}
