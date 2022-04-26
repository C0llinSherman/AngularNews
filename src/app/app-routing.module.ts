import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LikedComponent } from './components/liked/liked.component';
import { LoginComponent } from './components/login/login.component';
import { SearchComponent } from './components/search/search.component';
import { TopHeadlinesComponent } from './components/top-headlines/top-headlines.component';

const routes: Routes = [
  // { path: 'welcome', component: WelcomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'top-headlines', component: TopHeadlinesComponent},
  { path: 'search', component: SearchComponent},
  { path: 'liked', component: LikedComponent},

  { path: '**', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
