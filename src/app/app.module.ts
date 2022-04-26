import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { TopHeadlinesComponent } from './components/top-headlines/top-headlines.component';
import { SearchComponent } from './components/search/search.component';
import { LikedComponent } from './components/liked/liked.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list'; 
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TopHeadlinesComponent,
    SearchComponent,
    LikedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    FormsModule,
    MatToolbarModule,
    MatListModule,

    NgxAuthFirebaseUIModule.forRoot(
      {
        apiKey: 'AIzaSyDpRq1S6XRWOGGZRlZMulJKnVPQ5SswQ0c',
        authDomain: 'news-api-4f7ea.firebaseapp.com',
        // databaseURL: 'your-firebase-databaseURL',
        projectId: 'news-api-4f7ea',
        storageBucket: 'news-api-4f7ea.appspot.com',
        messagingSenderId: '227797413674'
      },
       () => 'your_app_name_factory',
      {
        enableFirestoreSync: true, // enable/disable autosync users with firestore
        toastMessageOnAuthSuccess: false, // whether to open/show a snackbar message on auth success - default : true
        toastMessageOnAuthError: false, // whether to open/show a snackbar message on auth error - default : true
        authGuardFallbackURL: '/loggedout', // url for unauthenticated users - to use in combination with canActivate feature on a route
        authGuardLoggedInURL: '/loggedin', // url for authenticated users - to use in combination with canActivate feature on a route
        passwordMaxLength: 60, // `min/max` input parameters in components should be within this range.
        passwordMinLength: 8, // Password length min/max in forms independently of each componenet min/max.
        // Same as password but for the name
        nameMaxLength: 50,
        nameMinLength: 2,
        // If set, sign-in/up form is not available until email has been verified.
        // Plus protected routes are still protected even though user is connected.
        guardProtectedRoutesUntilEmailIsVerified: true,
        enableEmailVerification: true, // default: true
        useRawUserCredential: true, // If set to true outputs the UserCredential object instead of firebase.User after login and signup - Default: false
      }),
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
