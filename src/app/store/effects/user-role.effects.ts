import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { UserRoleActionTypes, AddUserRoles, FetchSingleUserRole,
  UpdateUserRole, UpdateNotification, AddUserAuthorities } from '../actions';
import { switchMap, map, withLatestFrom, catchError } from 'rxjs/operators';
import { UserRoleService } from '../../pages/user-roles/services';
import { getSelectedUserRole } from '../selectors';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../reducers';


@Injectable()
export class UserRolesEffects {

  constructor(private actions$: Actions, private store: Store<AppState>, private userRoleService: UserRoleService) {}

  @Effect()
  fetchUsers$ = this.actions$.pipe(
    ofType(UserRoleActionTypes.LoadUserRoles),
    switchMap((action) => this.userRoleService.fetchUserRoles()),
    map((response: any) => {
      const userRolesPayload = response.userRoles ? response.userRoles : [];
      return new AddUserRoles(userRolesPayload);
    }),
    catchError(error => of(new UpdateNotification({
      message: error.message, statusCode: error.statusCode
      })
    ))
  );

  @Effect()
  fetchAuthorities$ = this.actions$.pipe(
    ofType(UserRoleActionTypes.FetchUserAuthorities),
    switchMap((action) => this.userRoleService.fetchAuthorities()),
    map((response: any) => {
      const userAuthorities = response.userAuthorities ? response.userAuthorities : [];
      return new AddUserAuthorities(userAuthorities);
    }),
    catchError(error => of(new UpdateNotification({
      message: error.message, statusCode: error.statusCode
      })
    ))
  );

  @Effect()
  fetchSingleUserRole$ = this.actions$.pipe(
    ofType(UserRoleActionTypes.FetchSingleUserRole),
    withLatestFrom(
      this.store.select(getSelectedUserRole)
      ),
    switchMap(([action, singleUserRoleInfo]: [FetchSingleUserRole, any]) =>
    this.userRoleService.fetchUserRoleByUid(singleUserRoleInfo.id)),
    map(response => {
        // Update selected userRole with additional informations
      return new UpdateUserRole(response);
    }),
    catchError(error => of(new UpdateNotification({
      message: error.message, statusCode: error.statusCode
      })
    ))
  );

  @Effect()
  addUserRole$ = this.actions$.pipe(
    ofType(UserRoleActionTypes.AddUserRole),
    switchMap((action: any) => this.userRoleService.addUserRole(action.payload)),
    map(response => {
      // When is successful saved then route back to userRoles list
      location.href = '#/userRoles';
      // this.
      return new UpdateNotification({message: 'User Role Successfull created', statusCode: 200});
    }),
    catchError(error => of(new UpdateNotification({
      message: error.message, statusCode: error.statusCode
      })
    ))
  );

  @Effect()
  UpdateUserRole$ = this.actions$.pipe(
    ofType(UserRoleActionTypes.UpdateUserRole),
    withLatestFrom(
      this.store.select(getSelectedUserRole)
    ),
    switchMap(([action, singleUserRoleInfo]: [UpdateUserRole, any]) =>
      this.userRoleService.updateUserRoleByUid(singleUserRoleInfo)
    ),
    map(response => {
      // When is successful saved then route back to users list
      location.href = '#/userRoles';
      return new UpdateNotification({message: 'User Role Successfull updated', statusCode: 200});
    }),
    catchError(error => of(new UpdateNotification({
      message: error.message, statusCode: error.statusCode
      })
    ))
  );

}
