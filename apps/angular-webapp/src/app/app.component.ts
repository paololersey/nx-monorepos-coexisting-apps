import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { getSelectedId, loadLoginInit, loadLoginSuccess, User } from '@my-org/angular-central-lib';
import { select, Store } from '@ngrx/store';
import { LoginEffects } from 'libs/angular-central-lib/src/lib/+state/login/login.effects';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'my-org-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  public user: User = new User();
  sliceStore$: Observable<User>;
  public appPages = [
    { title: 'Inbox', url: '/folder/Inbox', icon: 'mail' },
    { title: 'Outbox', url: '/folder/Outbox', icon: 'paper-plane' },
    { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
    { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(private store: Store, private http: HttpClient) {}
  ngOnInit(): void {

    var username =  "test@angular-university.io";
    var password =  "test";
    this.user.username ="test@angular-university.io";
    this.user.password ="test";
    this.store.dispatch(loadLoginInit({username: username, password: password}));

    this.sliceStore$ = this.store.pipe(select(getSelectedId))
  }

  

}
