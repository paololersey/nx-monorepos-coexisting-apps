import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { getLoginEntities, getSelectedUser, loadLoginInit, loadLoginSuccess, LoginEntity } from '@my-org/angular-central-lib';
import { Dictionary } from '@ngrx/entity';
import { select, Store } from '@ngrx/store';
import { LoginEffects } from 'libs/angular-central-lib/src/lib/+state/login/login.effects';
import { User } from 'libs/angular-central-lib/src/lib/+state/login/user.model';
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
    this.user.username ="test@angular-university.io";
    this.user.password ="test";
    this.store.dispatch(loadLoginInit({username: this.user.username, password: this.user.password}));
    this.sliceStore$ = this.store.pipe(select(getSelectedUser))
    console.log(this.sliceStore$)
  }
}
