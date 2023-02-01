import { Action, createReducer, on } from '@ngrx/store';
import * as actions from "./filter.actions";
import { filterTypes } from './filter.actions';

export const initialState: filterTypes = 'all';

export const filterReducer = createReducer<filterTypes, Action>(
    initialState,
    on(actions.setFilter, (state, { filter }) => filter)
);