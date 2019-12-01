import { Component, OnInit } from '@angular/core';
import { FilterByPipe } from 'ngx-pipes';
import { AppState } from 'src/app/store/reducers';
import { Store } from '@ngrx/store';
import { getUsersList, getUserLoader } from '../../../../store/selectors';
import { Observable } from 'rxjs';
import { UpsertUser, DeleteUser, FetchSingleUser } from '../../../../store/actions';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
  providers: [FilterByPipe]
})
export class UsersListComponent implements OnInit {

  users$: Observable<any>;
  usersLoader$: Observable<any>;
  page = 1;
  itemsPerPage = 10;
  searchText = '';

  constructor(private store: Store<AppState>) {
    this.users$ = this.store.select(getUsersList);
    this.usersLoader$ = this.store.select(getUserLoader);
   }

  ngOnInit() {}

  trackByFn(index, item) {
    return item.id;
  }

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
    location.href = '#/users/edit/' + user.id;
    this.store.dispatch(new FetchSingleUser());
  }

  deleteUser(user) {
    if (confirm('Are you sure on the action of deleting ' + user.firstname + ' .?')) {
      // when OK is pressed, do the action of updating HRH.
      this.store.dispatch(new DeleteUser(user));
    } else {
      // when Cancel is pressed, do nothing.
    }
  }

  getProperDate(dateTime) {
    const newDateValue = dateTime ? (dateTime.split('T')[0] ? dateTime.split('T')[0] : dateTime) : '';
    return newDateValue;
  }

}
