import { createAction, props } from '@ngrx/store';

export type filterTypes = 'all' | 'active' | 'unactive';

export const setFilter = createAction('[Filter] Set Filter', props<{ filter:filterTypes }>());
