import { Component, OnInit, Input } from '@angular/core';
import { UserInfo } from 'src/app/store/models';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';
import { getPageStateCurrentSelection, getUseronListInfo } from 'src/app/store/selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  @Input() userData: any;
  currentSectionSelection$: Observable<any>;
  userInfo: UserInfo = {
    firstname: '', middlename: '',
    surname: '', email: '',
    phone: '', username: '',
    jobtitle: '', password: '',
    role: '', organisationunit: ''
  };
  comfirmPassword: string;

  constructor(private store: Store<AppState>) {
    this.currentSectionSelection$ = store.select(getPageStateCurrentSelection);
    this.store.select(getUseronListInfo).subscribe(userOnEdit => {
      this.userInfo = userOnEdit ? userOnEdit : {};
    });
      // check if input with user data is true hence fill it with userInfo
    if (this.userData) {
      this.userInfo = this.userData;
    }
    this.comfirmPassword = '';
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
        // accept saving the user info
    } else {
      // highlight missing mandatory field
    }

  }

}
