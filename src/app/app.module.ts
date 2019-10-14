import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgxPaginationModule} from 'ngx-pagination';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store/reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { effects } from './store/effects';
import { NgPipesModule } from 'ngx-pipes';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from './shared/shared.module';
import { HrisMenuModule } from '@iapps/hris-menu';


@NgModule({
  declarations: [
    AppComponent, HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HrisMenuModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    NgxPaginationModule,
    NgPipesModule,
    SharedModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot(effects)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
