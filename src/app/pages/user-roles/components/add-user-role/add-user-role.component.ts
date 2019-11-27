import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../store/reducers';
import { getSelectedUserRole } from '../../../../store/selectors';

@Component({
  selector: 'app-add-user-role',
  templateUrl: './add-user-role.component.html',
  styleUrls: ['./add-user-role.component.css']
})
export class AddUserRoleComponent implements OnInit {

  selectedUserRole$: Observable<any>;
  userRole: any = {
    name: '',
    description: '',
    userAuthorities: []
  };

  constructor(private store: Store<AppState>) {
    this.selectedUserRole$ = store.select(getSelectedUserRole);
  }

  ngOnInit() {
  }

}
