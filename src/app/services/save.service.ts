import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Article } from '../interfaces/article';

@Injectable({
  providedIn: 'root'
})
export class SaveService {
  private articlesRef: AngularFirestoreCollection
  constructor(private db: AngularFirestore) {
    this.articlesRef = this.db.collection('saved-articles')
  }
  saveArticle(article: Article) {
    console.log('asld;kfj')
    return this.articlesRef.add(article)
      .then(_ => console.log('success on add'))
      .catch(error => console.log('add', error))
  }
  getArticleObservable(): Observable<any> {
    return this.articlesRef.valueChanges();
  }
}
