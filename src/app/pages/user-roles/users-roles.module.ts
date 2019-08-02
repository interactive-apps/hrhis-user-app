import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { userRoleComponents } from './components';
import { userRoleServices } from './services';
import { UserRolesRoutingModule } from './user-roles-routing.module';

@NgModule({
  declarations: [...userRoleComponents],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    UserRolesRoutingModule
  ],
  exports: [...userRoleComponents],
  providers: [...userRoleServices]
})
export class UsersRolesModule { }
