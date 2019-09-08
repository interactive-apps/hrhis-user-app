import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { userRoleServices } from './services';
import { UserRolesRoutingModule } from './user-roles-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgPipesModule } from 'ngx-pipes';
import { userRoleComponents } from './components';

@NgModule({
  declarations: [
    ...userRoleComponents
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    UserRolesRoutingModule,
    NgxPaginationModule,
    NgPipesModule
  ],
  exports: [...userRoleComponents],
  providers: [...userRoleServices]
})
export class UserRolesModule { }
