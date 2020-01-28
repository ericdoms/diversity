import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillProfileFormComponent } from './skill-profile-form.component';
import { MatCheckboxModule } from '../../../../node_modules/@angular/material';
import { SkillStepFourComponent } from './skill-step-four/skill-step-four.component';

describe('SkillProfileFormComponent', () => {
  let component: SkillProfileFormComponent;
  let fixture: ComponentFixture<SkillProfileFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        SkillProfileFormComponent,
        SkillStepFourComponent
      ],
      imports: [
        MatCheckboxModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillProfileFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
