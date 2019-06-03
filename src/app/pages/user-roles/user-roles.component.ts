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
  pageItems = 4;

  constructor() {
    this.dummyRoles = dummyUserroles;
  }

  ngOnInit() {
  }

}
