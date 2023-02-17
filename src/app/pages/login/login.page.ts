import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  password: string;
  email: string;
  constructor() {
    this.password = '';
    this.email = '';
   }

  ngOnInit() {
  }

  login(){
    console.log('Login');
  };
  
}
