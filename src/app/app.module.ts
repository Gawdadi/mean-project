import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  AppSideNavBarComponent,
  AppToolbarComponent,
} from 'src/app/components';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './containers';
import { LoginComponent } from './pages/login/login.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthInterceptor } from './utils/interceptors/auth.interceptor';
import { ToastrModule } from 'ngx-toastr';

const APP_INTERCEPTOR = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi: true,
};
const COTAINERS = [MainComponent];
const COMMON = [];
const COMPONENTS = [AppToolbarComponent, AppSideNavBarComponent];
const PAGES = [LoginComponent];

@NgModule({
  declarations: [AppComponent, ...COTAINERS, ...COMPONENTS, ...PAGES],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ...COMMON,
    ToastrModule.forRoot({
      timeOut: 2000,
      preventDuplicates: true,
      positionClass: 'toast-bottom-center',
      progressBar: true,
    }),
  ],
  providers: [APP_INTERCEPTOR],
  bootstrap: [AppComponent],
})
export class AppModule {}
