import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as fromPageState from './page-state.reducer';

export interface AppState {
  pageState: fromPageState.State;
}

export const reducers: ActionReducerMap<AppState> = {
  pageState: fromPageState.reducer,
};

export const getRootState = (state: AppState) => state;

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
