import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, switchMap, mergeMap, withLatestFrom, tap, catchError } from 'rxjs/operators';
import { UserActionTypes, AddUsers, UpdateNotification, AddUser } from '../actions';
import { of, Observable } from 'rxjs';
import { AppState } from '../reducers';
import { Store } from '@ngrx/store';
import { UserService } from '../../pages/users/services';
import * as fromHelpers from '../../shared/helpers';


@Injectable()
export class USerEffects {

  constructor(private actions$: Actions, private store: Store<AppState>, private userService: UserService) {}

  @Effect()
  fetchUsers$ = this.actions$.pipe(
    ofType(UserActionTypes.LoadUsers),
    switchMap((action) => this.userService.fetchUsers()),
    map((response: any) => {
      const usersPayload = response.users ? response.users : [];
      return new AddUsers(usersPayload);
    }),
    catchError(error => of( new UpdateNotification({
        statusCode: error.statusCode,
        message: 'error: ' + error.message
        })
      ))
  );

  @Effect()
  addUser$ = this.actions$.pipe(
    ofType(UserActionTypes.AddUser),
    switchMap((action: any) => {
      const sanitizedUserPayload = fromHelpers.sanitizeNewUserinfo(action.payload);
      return this.userService.addUser(sanitizedUserPayload);
    }),
    map(response => {
      // When is successful saved then route back to users list
      location.href = '#/users';
      return new UpdateNotification({message: 'User Successfull created', statusCode: 200});
    }),
    catchError(error => of(new UpdateNotification({
      message: error.message, statusCode: error.statusCode
      })
    ))
  );

  @Effect()
  UpdateUser$ = this.actions$.pipe(
    ofType(UserActionTypes.UpdateUser),
    switchMap((action: any) => {
      const sanitizedUserPayload = fromHelpers.sanitizeExistingUserinfo(action.payload);
      return this.userService.updateUserByUid(sanitizedUserPayload.uid, sanitizedUserPayload);
    }),
    map(response => {
      // When is successful saved then route back to users list
      location.href = '#/users';
      return new UpdateNotification({message: 'User Successfull updated', statusCode: 200});
    }),
    catchError(error => of(new UpdateNotification({
      message: error.message, statusCode: error.statusCode
      })
    ))
  );

  @Effect()
  deleteUser$ = this.actions$.pipe(
    ofType(UserActionTypes.DeleteUser),
    switchMap((action: any) => this.userService.deleteUserByUid(action.payload)),
    map(response => {
      // When is successful saved then route back to users list
      location.href = '#/users';
      return new UpdateNotification({message: 'User Successfull deleted', statusCode: 200});
    }),
    catchError(error => of(new UpdateNotification({
      message: error.message, statusCode: error.statusCode
      })
    ))
  );
}
