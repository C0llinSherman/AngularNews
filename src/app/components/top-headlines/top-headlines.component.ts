import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/compat';
import { APIService } from 'src/app/services/api.service';

@Component({
  selector: 'app-top-headlines',
  templateUrl: './top-headlines.component.html',
  styleUrls: ['./top-headlines.component.scss']
})
export class TopHeadlinesComponent implements OnInit {

  constructor(private apiService: APIService) { }

  category: string = 'general';
  response: any;
  articles: any;
  // user = FirebaseAuth.getInstance().currentUser
  

  ngOnInit(): void {
    this.apiService.getFeatured(this.category).subscribe(res => {
      this.response = res;
      this.articles = this.response.articles
      console.log(this.response)
    })
  }
  getCategory(category: string) {
    this.category = category
    this.apiService.getFeatured(this.category).subscribe(res => {
      this.response = res;
      this.articles = this.response.articles
      console.log(this.response)
    })
  }

  saveArticle(){

  }

}
