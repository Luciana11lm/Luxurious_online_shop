import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogInComponent } from '../log-in/log-in.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  loggedUser: any;
  constructor(private router: Router){
    const localUser = localStorage.getItem('loggedUser');
    if (localUser != null) {
      this.loggedUser = JSON.parse(localUser);
    }
  }
isLogged(): boolean{
    return LogInComponent.isLogged;
  }

  onLogoff(){
    localStorage.removeItem('loggedUser');
    this.router.navigateByUrl('/login');
    LogInComponent.isLogged = false;
  }
}
