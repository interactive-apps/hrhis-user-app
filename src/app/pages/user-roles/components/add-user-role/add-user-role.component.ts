import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../store/reducers';
import { getSelectedUserRole, getUserAuthorities, getPageStateCurrentSelection } from '../../../../store/selectors';
import { UpdateUserRole, UpdateNotification, AddUserRole, UpsertUserRole } from '../../../../store/actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user-role',
  templateUrl: './add-user-role.component.html',
  styleUrls: ['./add-user-role.component.css']
})
export class AddUserRoleComponent implements OnInit {

  currentSectionSelection$: Observable<any>;
  selectedUserRole$: Observable<any>;
  authorities$: Observable<any>;
  isEditMode: boolean;
  userRole: any = {
    name: '',
    description: '',
    userAuthorities: []
  };

  constructor(private store: Store<AppState>, private router: Router) {
    this.selectedUserRole$ = store.select(getSelectedUserRole);
    this.authorities$ = store.select(getUserAuthorities);
    this.currentSectionSelection$ = store.select(getPageStateCurrentSelection);

    router.events.subscribe((url: any) => {
      if (url.url) {
        const currentRoute = url.url;
          // check if link is in edit mode
        if (currentRoute.includes('edit')) {
          this.isEditMode = true;
        } else {
          this.isEditMode = false;
        }
      }
    });
    store.select(getSelectedUserRole).subscribe(userRole => {
      this.userRole = Object.keys(userRole) ? userRole : this.userRole;
  });
  }

  ngOnInit() {
  }

  recieveSelectedItems(items) {
    this.store.dispatch(new UpsertUserRole({
      ...this.userRole,
      userAuthorities: items.selectedItems ? items.selectedItems : []
    }));

  }

  saveUserRole() {
    if (this.userRole.name && this.userRole.userAuthorities.length > 0) {
      if (this.isEditMode) {
        this.store.dispatch(new UpdateUserRole(this.userRole));
      } else {
        this.store.dispatch(new AddUserRole(this.userRole));
      }
    } else {
      this.store.dispatch(new UpdateNotification({
        message: 'Please fill all mandatory fields.', statusCode: 500
      }));
    }
  }

}
