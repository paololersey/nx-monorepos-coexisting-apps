import { Component } from '@angular/core';
import { getLoginEntities, getSelectedUser, LoginEntity } from '@my-org/angular-central-lib';
import { Dictionary } from '@ngrx/entity';
import { select, Store } from '@ngrx/store';
import { User } from 'libs/angular-central-lib/src/lib/+state/login/user.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent{
 
  username$: Observable<string> = this.store.pipe(select(getSelectedUser))
  loginEntities$: Observable<Dictionary<LoginEntity>> = this.store.pipe(select(getLoginEntities))
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  public appPages = [
    { title: 'Inbox', url: '/folder/Inbox', icon: 'mail' },
    { title: 'Outbox', url: '/folder/Outbox', icon: 'paper-plane' },
    { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
    { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];
  
 
  constructor(private store: Store) { }

  ngOnInit(): void {
    /*this.username$.subscribe(username => {
      console.log("user=" + username);
    })*/
  }

  

}
