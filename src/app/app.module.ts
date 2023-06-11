import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { UserDetailsFormComponent } from './components/user-details-form/user-details-form.component';
import { TestComponent } from './components/test/test.component';
import { UserNavbarComponent } from './components/user-navbar/user-navbar.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import {JwtInterceptor} from "./interceptor/jwt.interceptor";
@NgModule({
  declarations: [
    AppComponent,
    RegisterFormComponent,
    UserDetailsFormComponent,
    TestComponent,
    UserNavbarComponent,
    LoginPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{
      provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
