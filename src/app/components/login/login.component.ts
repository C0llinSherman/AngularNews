import { Component, OnInit } from '@angular/core';
import {AuthProvider} from 'ngx-auth-firebaseui'



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
providers = AuthProvider
  constructor() { }

  ngOnInit(): void {
    
  }

  printUser(event){
    console.log(event.user._delegate.uid)
localStorage.setItem("uid", event.user._delegate.uid)
  }

}
