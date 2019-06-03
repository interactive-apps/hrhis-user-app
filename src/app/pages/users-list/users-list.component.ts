import { Component, OnInit } from '@angular/core';
import { dummyUsers } from 'src/assets/config/dummy-users';
import { FilterByPipe } from 'ngx-pipes';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
  providers: [FilterByPipe]
})
export class UsersListComponent implements OnInit {

  users: any;
  page = 1;
  itemsPerPage = 10;
  searchText = '';

  constructor() {
    this.users = dummyUsers;
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

  addUser(e) {
    
  }

}
