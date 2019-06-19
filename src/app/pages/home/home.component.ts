import { Component, OnInit } from '@angular/core';
import { userSections } from 'src/assets/config/userSectionsConfig';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userSections: any;

  constructor(private userService: UserService) {
    this.userSections = userSections;
    this.userService.fetchUserSections().subscribe(response => {
      console.log(JSON.stringify(response));
    });
   }

  ngOnInit() {
  }

}
