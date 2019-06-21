import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UsersListComponent } from './pages/users-list/users-list.component';
import { UserRolesComponent } from './pages/user-roles/user-roles.component';
import { UserGroupsComponent } from './pages/user-groups/user-groups.component';
import { AddUserComponent } from './pages/add-user/add-user.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'users',
    component: UsersListComponent
  },
  {
    path: 'users/addUser',
    component: AddUserComponent
  },
  {
    path: 'users/editUser',
    component: AddUserComponent
  },
  {
    path: 'userroles',
    component: UserRolesComponent
  },
  {
    path: 'usergroups',
    component: UserGroupsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
