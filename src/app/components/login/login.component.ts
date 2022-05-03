import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthProvider } from 'ngx-auth-firebaseui'



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  providers = AuthProvider
  constructor(private router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('uid')) {
      this.router.navigate(['/top-headlines'])
    }
  }

  printUser(event: any) {
    localStorage.setItem("uid", event.user._delegate.uid)
    this.router.navigate(['/top-headlines'])
  }

}
