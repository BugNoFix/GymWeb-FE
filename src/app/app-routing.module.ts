import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CustomerPageComponent} from "./pages/customer-page/customer-page.component";
import {LoginPageComponent} from "./pages/login-page/login-page.component";
import {BookingPageComponent} from "./pages/booking-page/booking-page.component";
import {WorkoutPlanPageComponent} from "./pages/workout-plan-page/workout-plan-page.component";
import {LogoutComponent} from "./pages/logout/logout.component";
import {JwtGuard} from "./guard/jwt-guard";
import {FeedbackPageComponent} from "./pages/feedback-page/feedback-page.component";

const routes: Routes = [
    { path: '', component: CustomerPageComponent, canActivate: [JwtGuard]},
    { path: 'homepage', component: CustomerPageComponent , canActivate: [JwtGuard]},
    { path: 'login', component: LoginPageComponent},
    { path: 'booking', component: BookingPageComponent, canActivate: [JwtGuard]},
    { path: 'workout', component: WorkoutPlanPageComponent, canActivate: [JwtGuard]},
    { path: 'feedback', component: FeedbackPageComponent, canActivate: [JwtGuard]},
    { path: 'logout', component: LogoutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
