import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { UserRoleActionTypes, AddUserRoles } from '../actions';
import { switchMap, map } from 'rxjs/operators';
import { UserRoleService } from '../../pages/user-roles/services';


@Injectable()
export class UserRolesEffects {

  constructor(private actions$: Actions, private userRoleService: UserRoleService) {}

  @Effect()
  fetchUsers$ = this.actions$.pipe(
    ofType(UserRoleActionTypes.LoadUserRoles),
    switchMap((action) => this.userRoleService.fetchUserRoles()),
    map((response: any) => {
      const userRolesPayload = response.userRoles ? response.userRoles : [];
      return new AddUserRoles(userRolesPayload);
    })
  );
}