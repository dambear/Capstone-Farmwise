import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loggedIn: boolean = false;


  username: string;
  password: string;
  constructor(private router: Router) {
    
    this.username = '';
    this.password = '';

  }

  

  login() : void {
    if(this.username == 'admin' && this.password == '12345'){
      this.loggedIn = true;
      this.router.navigate(["dash"]);
    }else {
      alert("Invalid credentials");
    }
  }

}
