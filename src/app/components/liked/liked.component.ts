import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Article } from 'src/app/interfaces/article';
import { SaveService } from 'src/app/services/save.service';

@Component({
  selector: 'app-liked',
  templateUrl: './liked.component.html',
  styleUrls: ['./liked.component.scss']
})
export class LikedComponent implements OnInit {

article$: any;

  constructor(private saveService: SaveService) { 
  
      
  }
  

  ngOnInit(): void {
    this.getArticles()
  }

  getArticles() {
    this.article$ = this.saveService.getArticleObservable();
  }

}
