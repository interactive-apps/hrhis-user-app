import { Component, OnInit, Input } from '@angular/core';
import { UserInfo } from 'src/app/store/models';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';
import { getPageStateCurrentSelection, getUseronListInfo, getUserRolesList } from 'src/app/store/selectors';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services';
import { UpsertUser } from 'src/app/store/actions';
import * as fromUtilHelpers from '../../../../shared/helpers';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  currentSectionSelection$: Observable<any>;
  // userRoles$: Observable<any>;
  userInfo: UserInfo = {
    id: '',
    firstname: '', middlename: '',
    surname: '', email: '',
    phone: '', username: '',
    jobtitle: '', password: '',
    role: [], organisationunit: ''
  };
  comfirmPassword: string;
  isEditUserMode: boolean;
  showNotificationContents: any;
  showNotificationPopup: boolean;
  userRoles: any = [];

  constructor(private store: Store<AppState>, private userService: UserService, private router: Router) {
    this.comfirmPassword = '';
    this.currentSectionSelection$ = store.select(getPageStateCurrentSelection);
    // this.userRoles$ = store.select(getUserRolesList);
    store.select(getUserRolesList).subscribe(userRoles => {
        this.userRoles = userRoles ? userRoles : [];
    });
    router.events.subscribe((url: any) => {
      if (url.url) {
        const currentRoute = url.url;
          // check if link is in edit mode
        if (currentRoute.includes('editUser')) {
          this.isEditUserMode = true;
          this.store.select(getUseronListInfo).subscribe(userOnEdit => {
            this.userInfo = userOnEdit ? userOnEdit : {};
          });
        } else {
          this.isEditUserMode = false;
        }
      }
    });

    this.userInfo.id = (!this.isEditUserMode) ? fromUtilHelpers.makeLocalUid() : this.userInfo.id;
  }

  ngOnInit() {
  }

  onchangeConfirmPassword(e) {
    if (this.comfirmPassword !== this.userInfo.password) {
      // deny saving the user info
    }

  }

  recieveSelectedItems(items) {
    const rolesSelected = (items.selectemItems || []).map(role => {
      return {id: role.id, name: role.name};
    });
    this.userRoles = items.availableItems ? items.availableItems : [];
    this.store.dispatch(new UpsertUser({...this.userInfo, role: items.selectemItems ? items.selectemItems : []}));
  }

  saveUserInfo() {
    if (this.userInfo.password &&
      this.userInfo.firstname && this.userInfo.surname) {

      if (this.isEditUserMode) {
        // use service function to update user info
        this.userService.updateUserByUid(this.userInfo.id, this.userInfo )
        .subscribe(response => {
          this.store.dispatch(new UpsertUser(this.userInfo));
          this.showNotification('User Successfull added.', true, false);
        },
          error => {
            // TODO: include alert notification on fail
            this.showNotification(error.message + '', false, true);
          });

      } else {

        this.userService.addUser(this.userInfo)
        .subscribe(response => {
          this.showNotification('User Successfull added.', true, false);
            // When is successful saved then route back to users list
          location.href = '#/users';
        },
          error => {
            this.showNotification(error.message + '', false, true);
          });
      }

        // accept saving the user info
    } else {
      this.showNotification('Please fill all mandatory fields.', false, true);
    }

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
