import { UsersListComponent, AddUserComponent } from './components';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const usersRoutes: Routes = [
    {
      path: '',
      redirectTo: 'list',
      pathMatch: 'full'
    },
    {
      path: 'list',
      component: UsersListComponent
    },
    {
      path: 'add',
      component: AddUserComponent
    },
    {
      path: 'edit/:id',
      component: AddUserComponent
    }
  ];

@NgModule({
  imports: [RouterModule.forChild(usersRoutes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {}
