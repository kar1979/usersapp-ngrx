import { createReducer, on } from '@ngrx/store';
import { addUser, editUser, toggleStatus, deleteUser, toggleAllStatus } from './user.actions';
import { User } from './models/user.model';

export const initialState: User[] = [
  new User('Cissy Louise'),
  new User('Keaton Sabella'),
  new User('Delano Cyan'),
];

export const addUserReducer = createReducer(
  initialState,
  on(addUser, (state, { name }) => [...state, new User(name)]),
  on(editUser, (state, { id, name }) => {
    return state.map( editedUser => {
      if (editedUser.id === id) {
        return {
          ...editedUser,
          name: name
        }
      } else {
        return editedUser;
      }
    })
  }),
  on(deleteUser, (state, { id }) => {
    return state.filter( user => user.id !== id)
  }),
  on(toggleStatus, (state, { id }) => {
    return state.map( statusUser => {
      if (statusUser.id === id) {
        return {
          ...statusUser,
          status: !statusUser.status
        }
      } else {
        return statusUser;
      }
    })
  }),
  on(toggleAllStatus, (state, { status }) => state.map( statusUser => {
      return {
        ...statusUser,
        status: status
      }
    })
  )
);