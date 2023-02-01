import { createAction, props } from '@ngrx/store';

export const addUser = createAction('[User] Add User', props<{ name:string }>());
export const editUser = createAction('[User] Edit User', props<{ id:number, name:string }>());
export const deleteUser = createAction('[User] Delete User', props<{ id:number }>());
export const toggleStatus = createAction('[User] Toggle Status', props<{ id:number }>());
export const toggleAllStatus = createAction('[User] Toggle All Status', props<{ status:boolean }>() );
