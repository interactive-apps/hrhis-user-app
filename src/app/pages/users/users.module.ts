import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { usersComponents } from './components';
import { userServices } from './services';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { UsersRoutingModule } from './users-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgPipesModule } from 'ngx-pipes';

@NgModule({
  declarations: [
    ...usersComponents
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    UsersRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    NgPipesModule
  ],
  exports: [...usersComponents],
  providers: [...userServices]
})
export class UsersModule { }
