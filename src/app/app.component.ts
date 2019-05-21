import { Component } from '@angular/core';
import { userSections } from 'src/assets/config/userSectionsConfig';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  userSections = userSections;
}
