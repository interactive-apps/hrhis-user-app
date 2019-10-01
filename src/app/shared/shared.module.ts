import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { NgPipesModule } from 'ngx-pipes';
import { FormsModule } from '@angular/forms';
import { sharedComponents } from './components';
import { sharedServices } from './services';
import { NgxPaginationModule } from 'ngx-pagination';
import { materialModules } from './material-modules';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgPipesModule,
    NgxPaginationModule,
    FormsModule,
    ...materialModules
  ],
  declarations: [
    ...sharedComponents
  ],
  exports: [...sharedComponents, ...materialModules],
  providers: [...sharedServices]
})
export class SharedModule { }
