import { Component, OnInit } from '@angular/core';
import { dummyUserroles } from 'src/assets/config/dummy-user-roles';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';
import { getUserRolesList } from 'src/app/store/selectors';
import { Observable } from 'rxjs';
import { LoadUserRoles } from 'src/app/store/actions';

@Component({
  selector: 'app-user-roles',
  templateUrl: './user-roles.component.html',
  styleUrls: ['./user-roles.component.css']
})
export class UserRolesComponent implements OnInit {

  userRoles$: Observable<any>;
  page = 1;
  itemsPerPage = 10;
  searchText = '';

  constructor(private store: Store<AppState>) {
    this.store.dispatch(new LoadUserRoles());
    this.userRoles$ = this.store.select(getUserRolesList);
  }

  ngOnInit() {
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

}
