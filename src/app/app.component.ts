import { Component, OnInit } from '@angular/core';
import { userSections } from 'src/assets/config/userSectionsConfig';
import { AppState } from './store/reducers';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getPageStateCurrentSelection, getUserSections } from './store/selectors';
import { ToggoleSection, LoadPageStates, LoadUserRoles } from './store/actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  userSections$: Observable<any>;
  currentSectionSelection$: Observable<any>;
  constructor(private store: Store<AppState>, private router: Router) {
    this.store.dispatch(new LoadPageStates());
    this.store.dispatch(new LoadUserRoles());
    this.userSections$ = this.store.select(getUserSections);
    this.currentSectionSelection$ = store.select(getPageStateCurrentSelection);

    let currentRoute = '';
      // fetch current route so as to update menu active statu
    router.events.subscribe((url: any) => {
      if (url.url) {
        currentRoute = url.url;
        this.toggoleSection(currentRoute.split('/')[1]);
      }
    });
  }

  ngOnInit() {}

  toggoleSection(sectionId) {
    this.store.dispatch(new ToggoleSection(sectionId));
  }
}
