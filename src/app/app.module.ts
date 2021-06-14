import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppSideNavBarComponent, AppToolbarComponent } from 'src/components';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './containers';

const COTAINERS = [MainComponent];
const COMPONENTS = [AppToolbarComponent, AppSideNavBarComponent];

@NgModule({
  declarations: [AppComponent, ...COTAINERS, ...COMPONENTS],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
