import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillStepFourComponent } from './skill-step-four.component';
import { MatCheckboxModule } from '@angular/material';

describe('SkillStepFourComponent', () => {
  let component: SkillStepFourComponent;
  let fixture: ComponentFixture<SkillStepFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        SkillStepFourComponent
      ],
      imports: [
        MatCheckboxModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillStepFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
