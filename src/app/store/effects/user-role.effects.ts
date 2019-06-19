import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { UserService } from 'src/app/shared/services/user.service';
import { UserRoleActionTypes, AddUserRoles } from '../actions';
import { switchMap, map } from 'rxjs/operators';


@Injectable()
export class UserRolesEffects {

  constructor(private actions$: Actions, private userService: UserService) {}

  @Effect()
  fetchUsers$ = this.actions$.pipe(
    ofType(UserRoleActionTypes.LoadUserRoles),
    switchMap((action) => this.userService.fetchUserRoles()),
    map((response: any) => {
      const userRolesPayload = response.userRoles ? response.userRoles : [];
      return new AddUserRoles(userRolesPayload);
    })
  );
}