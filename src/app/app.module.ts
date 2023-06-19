import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {RegisterFormComponent} from './components/register-form/register-form.component';
import {UserDetailsFormComponent} from './components/user-details-form/user-details-form.component';
import {UserNavbarComponent} from './components/user-navbar/user-navbar.component';
import {LoginPageComponent} from './pages/login-page/login-page.component';
import {JwtInterceptor} from "./interceptor/jwt.interceptor";
import {TableBodyDetailsComponent} from './components/table-body-details/table-body-details.component';
import {CustomerPageComponent} from './pages/customer-page/customer-page.component';
import {BookingPageComponent} from './pages/booking-page/booking-page.component';
import {WorkoutPlanTableComponent} from './components/workout-plan-table/workout-plan-table.component';
import {WorkoutPlanFormComponent} from './components/workout-plan-form/workout-plan-form.component';
import {WorkoutPlanPageComponent} from './pages/workout-plan-page/workout-plan-page.component';
import {LogoutComponent} from './pages/logout/logout.component';
import {FeedbackFormComponent} from './components/feedback-form/feedback-form.component';
import {FeedbackTableComponent} from './components/feedback-table/feedback-table.component';
import {FeedbackPageComponent} from './pages/feedback-page/feedback-page.component';
import {ListCustomerOfPtComponent} from './components/list-customer-of-pt/list-customer-of-pt.component';
import {PtPageComponent} from './pages/pt-page/pt-page.component';
import {CustomerDetailsPageComponent} from './pages/customer-details-page/customer-details-page.component';
import {RoomFormComponent} from './components/room-form/room-form.component';
import {RoomTableComponent} from './components/room-table/room-table.component';
import {RoomPageComponent} from './pages/room-page/room-page.component';
import {UserTableComponent} from './components/user-table/user-table.component';
import {AdminHomePageComponent} from './pages/admin-home-page/admin-home-page.component';
import {GenericHomePageComponent} from './pages/generic-home-page/generic-home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterFormComponent,
    UserDetailsFormComponent,
    UserNavbarComponent,
    LoginPageComponent,
    TableBodyDetailsComponent,
    CustomerPageComponent,
    BookingPageComponent,
    WorkoutPlanTableComponent,
    WorkoutPlanFormComponent,
    WorkoutPlanPageComponent,
    LogoutComponent,
    FeedbackFormComponent,
    FeedbackTableComponent,
    FeedbackPageComponent,
    ListCustomerOfPtComponent,
    PtPageComponent,
    CustomerDetailsPageComponent,
    RoomFormComponent,
    RoomTableComponent,
    RoomPageComponent,
    UserTableComponent,
    AdminHomePageComponent,
    GenericHomePageComponent,
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
