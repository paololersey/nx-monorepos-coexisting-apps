import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { User } from 'libs/angular-central-lib/src/lib/+state/login/user.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'my-org-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

  constructor() {}
 
  ngOnInit(): void {
  
  }
}
