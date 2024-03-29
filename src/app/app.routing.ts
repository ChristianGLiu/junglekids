import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

 // import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
 // import { SignupComponent } from './signup/signup.component';
 // import { LandingComponent } from './landing/landing.component';
 // import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';

const routes: Routes =[
    { path: '**', component: ProfileComponent}
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
