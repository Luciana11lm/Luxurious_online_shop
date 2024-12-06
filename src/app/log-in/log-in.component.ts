import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.scss'
})

export class LogInComponent {
  isSignInDivVisiblie: boolean = true;
  public static isLogged: boolean = false;
  signUpObj: SignUpModel = new SignUpModel();
  logInObj: LogInModel = new LogInModel();

  constructor(private router: Router){}

  onRegister(){
    debugger;
    const localUser = localStorage.getItem('angular17users');
    if(localUser != null){
      const users = JSON.parse(localUser);
      users.push(this.signUpObj);
      localStorage.setItem('angular17users', JSON.stringify(users));
    }
    else {
      const users = [];
      users.push(this.signUpObj);
      localStorage.setItem('angular17users', JSON.stringify(users));
    }
    alert('Registration Success');
    LogInComponent.isLogged = true;
    localStorage.setItem('isLogged', "da");
    this.router.navigateByUrl('/watches');
  }

  onLogin(){
    debugger;
    const localUsers = localStorage.getItem('angular17users');
    if (localUsers != null){
      const users = JSON.parse(localUsers);
      const isUserPresent = users.find( (user: SignUpModel) => user.email == this.logInObj.email && user.password == this.logInObj.password);
      if (isUserPresent != undefined){
        alert("User Found");
        localStorage.setItem('loggedUser', JSON.stringify(isUserPresent));
        LogInComponent.isLogged = true;
        this.router.navigateByUrl('/watches');
      } else {
        alert("No user found");
      }
    }
  }
}

export class SignUpModel {
  name: string;
  email: string;
  password: string;

  constructor() {
    this.email = "";
    this.name = "";
    this.password = "";
  }
}

export class LogInModel {
  email: string;
  password: string;

  constructor() {
    this.email = "";
    this.password = "";
  }
}