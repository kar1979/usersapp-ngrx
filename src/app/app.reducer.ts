import { ActionReducerMap } from '@ngrx/store';
import { filterTypes } from './filter/filter.actions';
import { User } from './users/models/user.model';
import { addUserReducer } from './users/user.reducer';
import { filterReducer } from './filter/filter.reducer';

export interface AppState {
    users: User[],
    filter: filterTypes
}

export const appReducers: ActionReducerMap<AppState> = {
    users: addUserReducer,
    filter: filterReducer

}