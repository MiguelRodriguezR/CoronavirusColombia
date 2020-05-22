import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { MapComponent } from './components/map/map.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import {NgxSvgModule} from 'ngx-svg';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MapComponent,
    SideBarComponent,
  ],
  imports: [
    BrowserModule,
    NgxSvgModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
