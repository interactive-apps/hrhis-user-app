import { Component, OnInit } from '@angular/core';
import { dummyUsers } from 'src/assets/config/dummy-users';
import { FilterByPipe } from 'ngx-pipes';
import { AppState } from 'src/app/store/reducers';
import { Store } from '@ngrx/store';
import { getUsersList, getNotificationInfo } from 'src/app/store/selectors';
import { Observable } from 'rxjs';
import { LoadUsers, UpsertUser, DeleteUser } from 'src/app/store/actions';
import { UserService } from '../../services';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
  providers: [FilterByPipe]
})
export class UsersListComponent implements OnInit {

  users$: Observable<any>;
  page = 1;
  itemsPerPage = 10;
  searchText = '';

  constructor(private store: Store<AppState>, private userService: UserService) {
    this.store.dispatch(new LoadUsers());
    this.users$ = this.store.select(getUsersList);
   }

  ngOnInit() {}

  onUpdatePageSize(e) {
    this.itemsPerPage = e;
  }

  onCurrentPageUpdate(e) {
    this.page = e;
  }

  searchingItems(e) {
    if (e) {
      e.stopPropagation();
    }
    this.searchText = e ? e.target.value.trim() : this.searchText;
  }

  editUser(user) {
    this.store.dispatch(new UpsertUser(user));
    location.href = '#/users/editUser/' + user.uid;
  }

  deleteUser(user) {
    if (confirm('Are you sure on the action of deleting ' + user.firstname + ' .?')) {
      // when OK is pressed, do the action of updating HRH.
      // TODO: Add a function for deleting user by store
      this.userService.deleteUserByUid(user.uid);
    } else {
      // when Cancel is pressed, do nothing.
    }
  }

}
