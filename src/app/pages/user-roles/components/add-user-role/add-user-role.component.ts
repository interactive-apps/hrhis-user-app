import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../store/reducers';
import { getSelectedUserRole, getUserAuthorities, getPageStateCurrentSelection } from '../../../../store/selectors';
import { UpdateUserRole, UpdateNotification } from '../../../../store/actions';

@Component({
  selector: 'app-add-user-role',
  templateUrl: './add-user-role.component.html',
  styleUrls: ['./add-user-role.component.css']
})
export class AddUserRoleComponent implements OnInit {

  currentSectionSelection$: Observable<any>;
  selectedUserRole$: Observable<any>;
  authorities$: Observable<any>;
  userRole: any = {
    name: '',
    description: '',
    userAuthorities: []
  };

  constructor(private store: Store<AppState>) {
    this.selectedUserRole$ = store.select(getSelectedUserRole);
    this.authorities$ = store.select(getUserAuthorities);
    this.currentSectionSelection$ = store.select(getPageStateCurrentSelection);

    store.select(getSelectedUserRole).subscribe(userRole => {
      this.userRole = Object.keys(userRole) ? userRole : this.userRole;
  });
  }

  ngOnInit() {
  }

  recieveSelectedItems(items) {
    this.store.dispatch(new UpdateUserRole({
      ...this.userRole,
      userAuthorities: items.selectemItems ? items.selectemItems : []
    }));
  }

  saveUserRole() {
    if (this.userRole.name && this.userRole.userAuthorities.length > 0) {

    } else {
      this.store.dispatch(new UpdateNotification({
        message: 'Please fill all mandatory fields.', statusCode: 500
      }));
    }
  }

}
