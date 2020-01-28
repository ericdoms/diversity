import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillStepOneComponent } from './skill-step-one.component';

describe('SkillStepOneComponent', () => {
  let component: SkillStepOneComponent;
  let fixture: ComponentFixture<SkillStepOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillStepOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillStepOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
