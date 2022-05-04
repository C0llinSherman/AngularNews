import { Component, OnInit } from '@angular/core';
import { SaveService } from 'src/app/services/save.service';

@Component({
  selector: 'app-liked',
  templateUrl: './liked.component.html',
  styleUrls: ['./liked.component.scss']
})
export class LikedComponent implements OnInit {

  article$: any;
  userArticles$: any = []
  otherArticles$: any = []
  uid: string | undefined | null;

  constructor(private saveService: SaveService) { }

  ngOnInit(): void {
    this.uid = localStorage.getItem('uid')
    this.getArticles()
  }

  getArticles() {
    this.saveService.getArticleObservable().subscribe((data: any) => {
      this.article$ = data
      this.sort()
    });
  }

  sort() {
    for (let i = 0; i < this.article$.length; i++) {
      if (this.article$[i].uid == this.uid) {
        this.userArticles$.push(this.article$[i])
      }
      else {
        this.otherArticles$.push(this.article$[i])
      }
    }
  }
}
