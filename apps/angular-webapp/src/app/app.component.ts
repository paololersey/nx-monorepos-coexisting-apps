import { Component, OnInit } from '@angular/core';
import { init, LoginEntity, User } from '@my-org/angular-central-lib';
import { Store } from '@ngrx/store';
import { LoginEffects } from 'libs/angular-central-lib/src/lib/+state/login/login.effects';

@Component({
  selector: 'my-org-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  private user: LoginEntity;
  public appPages = [
    { title: 'Inbox', url: '/folder/Inbox', icon: 'mail' },
    { title: 'Outbox', url: '/folder/Outbox', icon: 'paper-plane' },
    { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
    { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(private store: Store) {}
  ngOnInit(): void {
    user: {}
    this.store.dispatch(init());
    
  }
}
