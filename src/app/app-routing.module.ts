import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CustomerPageComponent} from "./pages/customer-page/customer-page.component";
import {LoginPageComponent} from "./pages/login-page/login-page.component";
import {BookingPageComponent} from "./pages/booking-page/booking-page.component";
import {WorkoutPlanPageComponent} from "./pages/workout-plan-page/workout-plan-page.component";
import {LogoutComponent} from "./pages/logout/logout.component";
import {JwtGuard} from "./guard/jwt-guard";
import {FeedbackPageComponent} from "./pages/feedback-page/feedback-page.component";
import {PtPageComponent} from "./pages/pt-page/pt-page.component";
import {CustomerDetailsPageComponent} from "./pages/customer-details-page/customer-details-page.component";
import {RoomPageComponent} from "./pages/room-page/room-page.component";
import {AdminHomePageComponent} from "./pages/admin-home-page/admin-home-page.component";
import {GenericHomePageComponent} from "./pages/generic-home-page/generic-home-page.component";

const routes: Routes = [
    { path: '', component: CustomerPageComponent, canActivate: [JwtGuard]},
    { path: 'homepage', component: GenericHomePageComponent, canActivate: [JwtGuard]},
    { path: 'login', component: LoginPageComponent},
    { path: 'booking', component: BookingPageComponent, canActivate: [JwtGuard]},
    { path: 'workout', component: WorkoutPlanPageComponent, canActivate: [JwtGuard]},
    { path: 'feedback', component: FeedbackPageComponent, canActivate: [JwtGuard]},
    { path: 'customer/:uuid', component: CustomerDetailsPageComponent, canActivate: [JwtGuard]},
    { path: 'room', component: RoomPageComponent, canActivate: [JwtGuard]},
    { path: 'logout', component: LogoutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
