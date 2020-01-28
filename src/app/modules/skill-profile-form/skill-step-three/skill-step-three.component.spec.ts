import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillStepThreeComponent } from './skill-step-three.component';

describe('SkillStepThreeComponent', () => {
  let component: SkillStepThreeComponent;
  let fixture: ComponentFixture<SkillStepThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillStepThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillStepThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
