import { Component, OnInit } from '@angular/core';
import { userSections } from 'src/assets/config/userSectionsConfig';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userSections: any;

  constructor() {
    this.userSections = userSections;
   }

  ngOnInit() {
  }

}
