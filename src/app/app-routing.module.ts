import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LikedComponent } from './components/liked/liked.component';
import { LoginComponent } from './components/login/login.component';
import { SearchComponent } from './components/search/search.component';
import { TopHeadlinesComponent } from './components/top-headlines/top-headlines.component';
import { LoggedInGuard } from 'ngx-auth-firebaseui';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'top-headlines', component: TopHeadlinesComponent, canActivate: [LoggedInGuard] },
  { path: 'search', component: SearchComponent, canActivate: [LoggedInGuard] },
  { path: 'liked', component: LikedComponent, canActivate: [LoggedInGuard] },
  { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
