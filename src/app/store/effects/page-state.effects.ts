import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, switchMap, mergeMap, withLatestFrom, tap, catchError } from 'rxjs/operators';
import { PageStateActionTypes, AddPageStates } from '../actions';
import { AppService } from 'src/app/shared/services';


@Injectable()
export class PageStateEffects {

  constructor(private actions$: Actions, private appService: AppService) {}

  @Effect()
  fetchUSerSection$ = this.actions$.pipe(
    ofType(PageStateActionTypes.LoadPageStates),
    switchMap((action) => this.appService.fetchUserSections()),
    map((response: any) => {
      const userSections = response.userSections ? response.userSections : [];
      return new AddPageStates(userSections);
    }),
  );
}
