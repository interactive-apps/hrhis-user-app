import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { NgPipesModule } from 'ngx-pipes';
import { FormsModule } from '@angular/forms';
import { sharedComponents } from './components';
import { services } from './services';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgPipesModule,
    FormsModule
  ],
  declarations: [
    ...sharedComponents
  ],
  exports: [...sharedComponents],
  providers: [...services]
})
export class SharedModule { }
