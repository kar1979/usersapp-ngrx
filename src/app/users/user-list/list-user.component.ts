import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { User } from '../models/user.model';
import { filterTypes } from '../../filter/filter.actions';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  users: User[] = [];
  currentFilter!: filterTypes;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    //this.store.select('users').subscribe(users => this.users = users);
    this.store.subscribe(({ users, filter }) => {
      this.users = users;
      this.currentFilter = filter;
    })
  }

}
