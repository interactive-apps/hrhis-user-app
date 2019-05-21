import { Component, OnInit } from '@angular/core';
import { dummyUsers } from 'src/assets/config/dummy-users';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users: any;

  constructor() {
    this.users = dummyUsers;
   }

  ngOnInit() {
  }

}
