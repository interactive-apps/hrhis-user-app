import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { UserRoleActionTypes, AddUserRoles, FetchSingleUserRole,
  UpdateUserRole, UpdateNotification } from '../actions';
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
    })
  );

  @Effect()
  fetchSingleUserRole$ = this.actions$.pipe(
    ofType(UserRoleActionTypes.FetchSingleUserRole),
    withLatestFrom(
      this.store.select(getSelectedUserRole)
      ),
    switchMap(([action, singleUserRoleInfo]: [FetchSingleUserRole, any]) =>
    this.userRoleService.fetchUserRoleByUid(singleUserRoleInfo.uid)),
    map(response => {
        // Update selected user with additional informations
      return new UpdateUserRole(response);
    }),
    catchError(error => of(new UpdateNotification({
      message: error.message, statusCode: error.statusCode
      })
    ))
  );

}
