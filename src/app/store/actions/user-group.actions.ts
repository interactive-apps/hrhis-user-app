import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { UserGroup } from '../models/user-group.model';

export enum UserGroupActionTypes {
  LoadUserGroups = '[UserGroup] Load UserGroups',
  AddUserGroup = '[UserGroup] Add UserGroup',
  UpsertUserGroup = '[UserGroup] Upsert UserGroup',
  AddUserGroups = '[UserGroup] Add UserGroups',
  UpsertUserGroups = '[UserGroup] Upsert UserGroups',
  UpdateUserGroup = '[UserGroup] Update UserGroup',
  UpdateUserGroups = '[UserGroup] Update UserGroups',
  DeleteUserGroup = '[UserGroup] Delete UserGroup',
  DeleteUserGroups = '[UserGroup] Delete UserGroups',
  ClearUserGroups = '[UserGroup] Clear UserGroups'
}

export class LoadUserGroups implements Action {
  readonly type = UserGroupActionTypes.LoadUserGroups;

  constructor(public payload: { userGroups: UserGroup[] }) {}
}

export class AddUserGroup implements Action {
  readonly type = UserGroupActionTypes.AddUserGroup;

  constructor(public payload: { userGroup: UserGroup }) {}
}

export class UpsertUserGroup implements Action {
  readonly type = UserGroupActionTypes.UpsertUserGroup;

  constructor(public payload: { userGroup: UserGroup }) {}
}

export class AddUserGroups implements Action {
  readonly type = UserGroupActionTypes.AddUserGroups;

  constructor(public payload: { userGroups: UserGroup[] }) {}
}

export class UpsertUserGroups implements Action {
  readonly type = UserGroupActionTypes.UpsertUserGroups;

  constructor(public payload: { userGroups: UserGroup[] }) {}
}

export class UpdateUserGroup implements Action {
  readonly type = UserGroupActionTypes.UpdateUserGroup;

  constructor(public payload: { userGroup: Update<UserGroup> }) {}
}

export class UpdateUserGroups implements Action {
  readonly type = UserGroupActionTypes.UpdateUserGroups;

  constructor(public payload: { userGroups: Update<UserGroup>[] }) {}
}

export class DeleteUserGroup implements Action {
  readonly type = UserGroupActionTypes.DeleteUserGroup;

  constructor(public payload: { id: string }) {}
}

export class DeleteUserGroups implements Action {
  readonly type = UserGroupActionTypes.DeleteUserGroups;

  constructor(public payload: { ids: string[] }) {}
}

export class ClearUserGroups implements Action {
  readonly type = UserGroupActionTypes.ClearUserGroups;
}

export type UserGroupActions =
 LoadUserGroups
 | AddUserGroup
 | UpsertUserGroup
 | AddUserGroups
 | UpsertUserGroups
 | UpdateUserGroup
 | UpdateUserGroups
 | DeleteUserGroup
 | DeleteUserGroups
 | ClearUserGroups;
