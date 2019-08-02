import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { usersComponents } from './components';
import { userServices } from './services';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  declarations: [...usersComponents],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    UsersRoutingModule
  ],
  exports: [...usersComponents],
  providers: [...userServices]
})
export class UsersModule { }
