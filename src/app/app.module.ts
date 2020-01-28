import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { NotificationComponent } from './modules/notification/notification.component';
import { MenuComponent } from './shared/menu/menu.component';
import { ReviewComponent } from './modules/review/review.component';
import { PositionDetailsComponent } from './modules/position-details/position-details.component';
import { PositionListComponent } from './modules/position-list/position-list.component';
import { SkillProfileComponent } from './modules/skill-profile/skill-profile.component';
import { SkillProfileFormComponent } from './modules/skill-profile-form/skill-profile-form.component';
import { StepperComponent } from './shared/stepper/stepper.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SkillProfileFormModule } from './modules/skill-profile-form/skill-profile-form.module';
import { AppointmentListComponent } from './modules/appointment-list/appointment-list.component';
import { AppointmentDetailComponent } from './modules/appointment-detail/appointment-detail.component';
import { SurveyComponent } from './modules/survey/survey.component';
import { SurveyModule } from './modules/survey/survey.module';
import { OnboardingModule } from './modules/onboarding/onboarding.module';
import { OnboardingComponent } from './modules/onboarding/onboarding.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    NotificationComponent,
    MenuComponent,
    ReviewComponent,
    PositionDetailsComponent,
    PositionListComponent,
    SkillProfileComponent,
    SkillProfileFormComponent,
    StepperComponent,
    AppointmentListComponent,
    AppointmentDetailComponent,
    SurveyComponent,
    OnboardingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SkillProfileFormModule,
    SurveyModule,
    OnboardingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
