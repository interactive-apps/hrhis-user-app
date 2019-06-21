import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, switchMap, mergeMap, withLatestFrom, tap, catchError } from 'rxjs/operators';
import { UserService } from 'src/app/shared/services/user.service';
import { PageStateActionTypes, AddPageStates } from '../actions';


@Injectable()
export class PageStateEffects {

  constructor(private actions$: Actions, private userService: UserService) {}

  @Effect()
  fetchUSerSection$ = this.actions$.pipe(
    ofType(PageStateActionTypes.LoadPageStates),
    switchMap((action) => this.userService.fetchUserSections()),
    map((response: any) => {
      const userSections = response.userSections ? response.userSections : [];
      return new AddPageStates(userSections);
    }),
  );
}
