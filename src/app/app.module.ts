import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';
import {SidebarComponent} from './shared/sidebar/sidebar.component';
import {NavbarComponent} from './shared/navbar/navbar.component';
import {HomeComponent} from './components/home/home.component';
import {GlobalInterceptor} from "./core/interceptors/global.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SidebarComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({closeButton: true, progressBar: true, progressAnimation: 'increasing', timeOut: 2000}),
    FormsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: GlobalInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
