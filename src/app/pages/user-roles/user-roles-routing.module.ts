import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { UserRolesListComponent, AddUserRoleComponent } from './components';

const userRolesRoutes: Routes = [
    {
      path: '',
      redirectTo: 'list',
      pathMatch: 'full'
    },
    {
      path: 'list',
      component: UserRolesListComponent
    },
    {
      path: 'add',
      component: AddUserRoleComponent
    },
    {
      path: 'edit/:id',
      component: AddUserRoleComponent
    },
  ];

@NgModule({
  imports: [RouterModule.forChild(userRolesRoutes)],
  exports: [RouterModule]
})
export class UserRolesRoutingModule {}
