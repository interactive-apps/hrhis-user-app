import { Component, OnInit } from '@angular/core';
import { dummyUserroles } from 'src/assets/config/dummy-user-roles';

@Component({
  selector: 'app-user-roles',
  templateUrl: './user-roles.component.html',
  styleUrls: ['./user-roles.component.css']
})
export class UserRolesComponent implements OnInit {

  dummyRoles: any;
  page = 1;
  itemsPerPage = 10;
  searchText = '';

  constructor() {
    this.dummyRoles = dummyUserroles;
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
