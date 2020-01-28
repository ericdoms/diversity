import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { NotificationComponent } from './modules/notification/notification.component';
import { ReviewComponent } from './modules/review/review.component';
import { PositionDetailsComponent } from './modules/position-details/position-details.component';
import { PositionListComponent } from './modules/position-list/position-list.component';
import { SkillProfileComponent } from './modules/skill-profile/skill-profile.component';
import { SkillProfileFormComponent } from './modules/skill-profile-form/skill-profile-form.component';
import { AppointmentListComponent } from './modules/appointment-list/appointment-list.component';
import { AppointmentDetailComponent } from './modules/appointment-detail/appointment-detail.component';
import { SurveyComponent } from './modules/survey/survey.component';
import { OnboardingComponent } from './modules/onboarding/onboarding.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }, {
    path: 'notification',
    component: NotificationComponent
  }, {
    path: 'review',
    component: ReviewComponent
  }, {
    path: 'position',
    component: PositionListComponent
  }, {
    path: 'position-details',
    component: PositionDetailsComponent
  }, {
    path: 'skill-profile',
    component: SkillProfileComponent
  }, {
    path: 'skill-profile-form',
    component: SkillProfileFormComponent
  }, {
    path: 'appointment-list',
    component: AppointmentListComponent
  }, {
    path: 'appointment-detail',
    component: AppointmentDetailComponent
  }, {
    path: 'onboarding',
    component: OnboardingComponent
  }, {
    path: 'survey',
    component: SurveyComponent
  }, {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
