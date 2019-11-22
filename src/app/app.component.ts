import { Component, OnInit } from '@angular/core';
import { userSections } from 'src/assets/config/userSectionsConfig';
import { AppState } from './store/reducers';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getPageStateCurrentSelection, getUserSections, getNotificationInfo } from './store/selectors';
import { ToggoleSection, LoadPageStates, LoadUserRoles } from './store/actions';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  userSections$: Observable<any>;
  currentSectionSelection$: Observable<any>;
  constructor(private store: Store<AppState>, private router: Router, private snackBar: MatSnackBar) {
    this.store.dispatch(new LoadPageStates());
    this.store.dispatch(new LoadUserRoles());
    this.userSections$ = this.store.select(getUserSections);
    this.currentSectionSelection$ = store.select(getPageStateCurrentSelection);
    this.store.select(getNotificationInfo).subscribe(notification => {
        // Trigger SnackaBar popUp view
      if (notification.message) {
        this.snackBar.open(notification.message, '', { duration: 4000 });
      }
    });

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
