import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as actions from "../user.actions";
import { User } from '../models/user.model';

@Component({
  selector: 'app-page-user',
  templateUrl: './page-user.component.html',
  styleUrls: ['./page-user.component.css']
})
export class PageUserComponent implements OnInit {
  allMarked: boolean = false;
  user!: User;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {}

  toggleAll() {
    this.allMarked = !this.allMarked;

    this.store.dispatch(actions.toggleAllStatus({ status: this.allMarked }));
  }
}
