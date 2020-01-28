import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule, MatSelectModule, MatStepperModule, MatRadioModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SkillStepOneComponent } from './skill-step-one/skill-step-one.component';
import { SkillStepFourComponent } from './skill-step-four/skill-step-four.component';
import { SkillStepThreeComponent } from './skill-step-three/skill-step-three.component';
import { SkillStepFiveComponent } from './skill-step-five/skill-step-five.component';


@NgModule({
  declarations: [
    SkillStepFourComponent,
    SkillStepThreeComponent,
    SkillStepOneComponent,
    SkillStepFiveComponent
  ],
  imports: [
    CommonModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatStepperModule,
    MatRadioModule
  ], exports: [
    SkillStepFourComponent,
    SkillStepThreeComponent,
    SkillStepOneComponent,
    SkillStepFiveComponent
  ]
})
export class SkillProfileFormModule { }
