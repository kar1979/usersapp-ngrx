import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as actions from '../../filter/filter.actions';

@Component({
  selector: 'app-footer-user',
  templateUrl: './footer-user.component.html',
  styleUrls: ['./footer-user.component.css']
})
export class FooterUserComponent implements OnInit {
  currentFilter: actions.filterTypes = 'all';
  filters: actions.filterTypes[] = ['all', 'active', 'unactive'];
  unactives: number = 0;
  actives: number = 0;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    // this.store.select('filter').subscribe(filter => this.currentFilter = filter);
    this.store.subscribe(state => {
      this.currentFilter = state.filter;
      this.unactives = state.users.filter(user => !user.status).length;
      this.actives = state.users.filter(user => user.status).length;
    });
  }

  changeFilter(selectedFilter: actions.filterTypes) {
    console.log('Selected filter: ', selectedFilter);
    this.store.dispatch(actions.setFilter({ filter: selectedFilter}));
  }

}
