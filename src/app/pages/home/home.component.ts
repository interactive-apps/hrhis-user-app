import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/store/reducers';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getUserSections } from 'src/app/store/selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userSections$: Observable<any>;

  constructor(private store: Store<AppState>) {
    this.userSections$ = this.store.select(getUserSections);
   }

  ngOnInit() {
  }

}
