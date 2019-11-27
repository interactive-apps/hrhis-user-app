import { createSelector } from '@ngrx/store';
import * as fromMainReducer from '../reducers';
import * as fromUserRoleStateReducer from '../reducers/user-role.reducer';

export const getUserRoleState = createSelector(
    fromMainReducer.getRootState,
    (state: fromMainReducer.AppState) => state.userRole
);

export const getUserRolesList = createSelector(
    getUserRoleState,
    fromUserRoleStateReducer.getUserRolesState
);

export const getSelectedUserRole = createSelector(
    getUserRoleState,
    fromUserRoleStateReducer.getSelectedUserRoleState
);
