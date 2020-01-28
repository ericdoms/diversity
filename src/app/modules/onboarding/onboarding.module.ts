import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatRadioModule, MatDatepickerModule, MatFormFieldModule, MatNativeDateModule, MatInputModule } from '../../../../node_modules/@angular/material';
import { OnboardingStepOneComponent } from './onboarding-step-one/onboarding-step-one.component';
import { OnboardingStepThreeComponent } from './onboarding-step-three/onboarding-step-three.component';



@NgModule({
  declarations: [
    OnboardingStepOneComponent, 
    OnboardingStepThreeComponent
  ],
  imports: [
    CommonModule,
    MatRadioModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule
  ],
  exports: [
    OnboardingStepOneComponent,
    OnboardingStepThreeComponent
  ],
  providers: [
    MatDatepickerModule
  ]
})
export class OnboardingModule { }
