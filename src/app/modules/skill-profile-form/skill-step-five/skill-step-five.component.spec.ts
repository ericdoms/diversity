import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillStepFiveComponent } from './skill-step-five.component';

describe('SkillStepFiveComponent', () => {
  let component: SkillStepFiveComponent;
  let fixture: ComponentFixture<SkillStepFiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillStepFiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillStepFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
