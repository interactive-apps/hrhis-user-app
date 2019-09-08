import { Component, OnInit } from '@angular/core';
import { userSections } from 'src/assets/config/userSectionsConfig';
import { AppState } from './store/reducers';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getPageStateCurrentSelection, getUserSections, getNotificationInfo } from './store/selectors';
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
  showNotificationContents: any;
  showNotificationPopup: boolean;
  constructor(private store: Store<AppState>, private router: Router) {
    this.store.dispatch(new LoadPageStates());
    this.store.dispatch(new LoadUserRoles());
    this.userSections$ = this.store.select(getUserSections);
    this.currentSectionSelection$ = store.select(getPageStateCurrentSelection);
    this.store.select(getNotificationInfo).subscribe(notification => {
      if (notification.statusCode === 200) {
        this.showNotification(notification.message, true);
      } else {
        this.showNotification(notification.message, false, true);
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

  showNotification(notificationProperties: any, isSuccessful?: boolean,
                   isError?: boolean, isOffline?: boolean, uploadOffline?: boolean ) {
    this.showNotificationContents = {
    // tslint:disable-next-line:object-literal-shorthand
    notificationProperties: notificationProperties,
    isSuccessful: isSuccessful ? isSuccessful : false,
    isError: isError ? isError : false,
    isOffline: isOffline ? isOffline : false,
    uploadOffline: uploadOffline ? uploadOffline : false
    };
    this.showNotificationPopup = true;
    setTimeout(() => {
    this.showNotificationPopup = false;
    }, 3000);
  }
}
