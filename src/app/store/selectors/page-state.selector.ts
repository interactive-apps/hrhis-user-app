import { createSelector } from '@ngrx/store';
import * as fromMainReducer from '../reducers';
import * as fromPageStateReducer from '../reducers/page-state.reducer'

export const getPageState = createSelector(
    fromMainReducer.getRootState,
    (state: fromMainReducer.AppState) => state.pageState
);

export const getPageStateCurrentSelection = createSelector(
    getPageState,
    fromPageStateReducer.getCurrentSectionState
);

export const getUserSections = createSelector(
    getPageState,
    fromPageStateReducer.getUserSectionsState
);

export const getNotificationInfo = createSelector(
    getPageState,
    fromPageStateReducer.getNotificationInfoState
);

export const getNotificationStatus = createSelector(
    getPageState,
    fromPageStateReducer.getNotificationStatusState
);
