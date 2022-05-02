import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthProvider } from 'ngx-auth-firebaseui';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'NewsAPI';
  providers = AuthProvider
  uid: any;
  constructor(private router: Router) { }

  uidRemove(){
    localStorage.removeItem('uid')
    this.router.navigate(['/login'])
  }
  
}
