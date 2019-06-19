import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as fromPageState from './page-state.reducer';
import * as fromUser from '../reducers/user.reducer';
import * as fromUserRole from '../reducers/user-role.reducer';
import * as fromUserGroup from '../reducers/user-group.reducer';

export interface AppState {
  pageState: fromPageState.State;
  user: fromUser.State;
  userRole: fromUserRole.State;
  userGroup: fromUserGroup.State;
}

export const reducers: ActionReducerMap<AppState> = {
  pageState: fromPageState.reducer,
  user: fromUser.reducer,
  userRole: fromUserRole.reducer,
  userGroup: fromUserGroup.reducer,
};

export const getRootState = (state: AppState) => state;

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
