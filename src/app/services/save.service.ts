import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentChangeAction } from '@angular/fire/compat/firestore';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Article } from '../interfaces/article';



@Injectable({
  providedIn: 'root'
})
export class SaveService {
  // private articleRef: AngularFirestoreCollection
  private articlesRef: AngularFirestoreCollection

  constructor(private db: AngularFirestore) {
    // this.articleRef = this.db.doc()
    this.articlesRef = this.db.collection('saved-articles')
   }

   private errorHandler(error) {
    console.log(error);
    return throwError(error);
  }

   saveArticle(article: Article){
     console.log('asld;kfj')
     return this.articlesRef.add(article)
      .then(_ => console.log('success on add'))
      .catch(error => console.log('add', error))
   }


  //  getArticleObservable(): Observable<Article[]> {
  //   return this.articlesRef.snapshotChanges()
  //   .pipe(
  //     map((items:DocumentChangeAction<Article>[]): Article[] => {
  //       return items.map((item: DocumentChangeAction<Article>): Article => {
  //         return {
  //           id: item.payload.doc.id,
  //           url: item.payload.doc.data().url,
  //           uid: item.payload.doc.data().uid
  //         };
  //       });
  //     }),
  //     catchError(this.errorHandler)
  //   )
  //  }
  getArticleObservable(): Observable<any> {
    return this.articlesRef.valueChanges();
  }
  //  async getArticle(){
  //    let ref = this.db.collection('saved-articles');
  //    let doc = await ref.get();
  //    console.log(doc);
  //    doc.subscribe((res:any) => {
  //      console.log(res)
  //    });
  //  }
}
