import { Component, OnInit, Input } from '@angular/core';
import { UserInfo } from 'src/app/store/models';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';
import { getPageStateCurrentSelection, getUseronListInfo } from 'src/app/store/selectors';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services';
import { UpsertUser } from 'src/app/store/actions';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  currentSectionSelection$: Observable<any>;
  userInfo: UserInfo = {
    id: '',
    firstname: '', middlename: '',
    surname: '', email: '',
    phone: '', username: '',
    jobtitle: '', password: '',
    role: '', organisationunit: ''
  };
  comfirmPassword: string;
  isEditUserMode: boolean;

  constructor(private store: Store<AppState>, private userService: UserService, private router: Router) {
    this.comfirmPassword = '';
    this.currentSectionSelection$ = store.select(getPageStateCurrentSelection);

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
  }

  ngOnInit() {
  }

  onchangeConfirmPassword(e) {
    if (this.comfirmPassword !== this.userInfo.password) {
      // deny saving the user info
    }

  }

  saveUserInfo() {
    if (this.userInfo.password && this.userInfo.role &&
      this.userInfo.firstname && this.userInfo.surname) {

      if (this.isEditUserMode) {
        // use service function to update user info
        this.userService.updateUserByUid(this.userInfo.id, this.userInfo )
        .subscribe(response => {
          // TODO: include alert notification on success
          this.store.dispatch(new UpsertUser(this.userInfo));
        },
          error => {
            // TODO: include alert notification on fail
          });

      } else {

        this.userService.addUser(this.userInfo)
        .subscribe(response => {
          // TODO: include alert notification on success
            // When is successful saved then route back to users list
          location.href = '#/users';
        },
          error => {
            // TODO: include alert notification on fail
          });
      }

        // accept saving the user info
    } else {
      // TODO: include alert notification on fail due to missing mandatory fields
    }

  }

}
