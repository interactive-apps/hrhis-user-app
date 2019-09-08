import { Component, OnInit, Input } from '@angular/core';
import { UserInfo } from 'src/app/store/models';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';
import { getPageStateCurrentSelection, getUseronListInfo, getUserRolesList } from 'src/app/store/selectors';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { UpsertUser, AddUser, UpdateUser, UpdateNotification } from 'src/app/store/actions';
import * as fromUtilHelpers from '../../../../shared/helpers';
import { UserService } from '../../services';

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
        if (currentRoute.includes('edit')) {
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
    if (this.comfirmPassword !== this.userInfo.password && !this.isEditUserMode) {
      // deny saving the user info
      alert('Password and Confirmed password do not match.');
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
    if (this.userInfo.password && this.userInfo.firstname && this.userInfo.surname) {
      if (this.isEditUserMode) {
        this.store.dispatch(new UpdateUser(this.userInfo));
      } else {
        if (this.comfirmPassword !== this.userInfo.password) {
          // deny saving the user info
          alert('Password and Confirmed password do not match.');
        } else {
          this.store.dispatch(new AddUser(this.userService));
        }
      }
    } else {
      this.store.dispatch(new UpdateNotification({
        message: 'Please fill all mandatory fields.', statusCode: 500
      }));
    }

  }

}
