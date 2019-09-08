import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { PageState } from '../models/page-state.model';

export enum PageStateActionTypes {
  ToggoleSection = '[PageState] Toggole User Section',
  LoadPageStates = '[PageState] Load PageStates',
  UpdateNotification = '[PageState] Update Notification Info',
  UpdateNotificationStatus = '[PageState] Update Notification Status',
  AddPageStates = '[PageState] Add PageStates',
  UpsertPageStates = '[PageState] Upsert PageStates',
  UpdatePageState = '[PageState] Update PageState',
  UpdatePageStates = '[PageState] Update PageStates',
  DeletePageState = '[PageState] Delete PageState',
  DeletePageStates = '[PageState] Delete PageStates',
  ClearPageStates = '[PageState] Clear PageStates'
}

export class ToggoleSection implements Action {
  readonly type = PageStateActionTypes.ToggoleSection;

  constructor(public payload: any) {}
}

export class LoadPageStates implements Action {
  readonly type = PageStateActionTypes.LoadPageStates;
}

export class UpdateNotification implements Action {
  readonly type = PageStateActionTypes.UpdateNotification;

  constructor(public payload: any) {}
}

export class UpdateNotificationStatus implements Action {
  readonly type = PageStateActionTypes.UpdateNotificationStatus;

  constructor(public payload: any) {}
}

export class AddPageStates implements Action {
  readonly type = PageStateActionTypes.AddPageStates;

  constructor(public payload: any) {}
}

export class UpsertPageStates implements Action {
  readonly type = PageStateActionTypes.UpsertPageStates;

  constructor(public payload: { pageStates: PageState[] }) {}
}

export class UpdatePageState implements Action {
  readonly type = PageStateActionTypes.UpdatePageState;

  constructor(public payload: { pageState: Update<PageState> }) {}
}

export class UpdatePageStates implements Action {
  readonly type = PageStateActionTypes.UpdatePageStates;

  constructor(public payload: { pageStates: Update<PageState>[] }) {}
}

export class DeletePageState implements Action {
  readonly type = PageStateActionTypes.DeletePageState;

  constructor(public payload: { id: string }) {}
}

export class DeletePageStates implements Action {
  readonly type = PageStateActionTypes.DeletePageStates;

  constructor(public payload: { ids: string[] }) {}
}

export class ClearPageStates implements Action {
  readonly type = PageStateActionTypes.ClearPageStates;
}

export type PageStateActions =
 LoadPageStates
 | UpdateNotification
 | UpdateNotificationStatus
 | AddPageStates
 | UpsertPageStates
 | UpdatePageState
 | UpdatePageStates
 | DeletePageState
 | DeletePageStates
 | ToggoleSection
 | ClearPageStates;
