import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/compat';
import { Observable } from 'rxjs';
import { APIService } from 'src/app/services/api.service';
import { SaveService } from 'src/app/services/save.service';
import { Article } from 'src/app/interfaces/article';

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
  uid: string;
  // user = FirebaseAuth.getInstance().currentUser


  ngOnInit(): void {
    this.apiService.getFeatured(this.category).subscribe(res => {
      this.response = res;
      this.articles = this.response.articles
      console.log(this.response)
    })
    this.uid = localStorage.getItem('uid')
    
  }
  getCategory(category: string) {
    this.category = category
    this.apiService.getFeatured(this.category).subscribe(res => {
      this.response = res;
      this.articles = this.response.articles
      console.log(this.response)
    })
  }

  saveArticle(article) {
    this.saveService.saveArticle({ article: article, uid: this.uid })
    console.log(this.uid)
    console.log(article)
  }

}
