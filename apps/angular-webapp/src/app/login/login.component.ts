import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { loadLoginInit } from '@my-org/angular-central-lib';
import { Store } from '@ngrx/store';
import { User } from 'libs/angular-central-lib/src/lib/+state/login/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public user: User = new User();


  constructor(private store: Store, private router: Router) { }

  ngOnInit(): void {
    
  }

  register(form) {
    console.log(form.value);
    this.user.username ="test@angular-university.io";
    this.user.password ="test";
    this.store.dispatch(loadLoginInit({username: this.user.username, password: this.user.password}));
   
  }

}
